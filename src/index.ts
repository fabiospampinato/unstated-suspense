
/* IMPORT */

import {Container as BaseContainer} from 'unstated';

/* CONTAINER */

class Container<State extends object> extends BaseContainer<State> {

  _listeners: Function[];
  _suspended = false;
  _updateSuspended = false;

  async setState ( updater: State | ( ( prevState: State ) => State ), callback?: () => void ) {

    let nextState;

    if ( typeof updater === 'function' ) {
      nextState = updater ( this.state );
    } else {
      nextState = updater;
    }

    if ( nextState == null ) {
      if ( callback ) callback ();
      return;
    }

    this.state = Object.assign ( {}, this.state, nextState );

    this._updateEmit ( callback );

  }

  suspend () {
    this._suspended = true;
  }

  unsuspend ( callback? ) {
    if ( !this._suspended ) return;
    this._suspended = false;
    if ( this._updateSuspended ) this._updateEmit ( callback );
  }

  _updateEmit ( callback? ) {

    this._updateSuspended = this._suspended;

    if ( this._suspended ) return;

    const promises = this._listeners.map ( listener => listener () );

    Promise.all ( promises ).then ( () => {
      if ( callback ) callback();
    });

  }

}

/* EXPORT */

export {Container};
