
/* IMPORT */

import {Container as BaseContainer} from 'unstated';

/* CONTAINER */

class Container<State extends object> extends BaseContainer<State> {

  _listeners: Function[];
  _suspendNr = 0;
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
    this._suspendNr++;
  }

  unsuspend ( callback? ) {
    if ( !this._suspendNr ) return;
    this._suspendNr--;
    if ( !this._suspendNr && this._updateSuspended ) this._updateEmit ( callback );
  }

  _updateEmit ( callback? ) {

    this._updateSuspended = !!this._suspendNr;

    if ( this._updateSuspended ) return;

    const promises = this._listeners.map ( listener => listener () );

    Promise.all ( promises ).then ( () => {
      if ( callback ) callback();
    });

  }

}

/* EXPORT */

export {Container};
