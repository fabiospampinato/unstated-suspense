
/* IMPORT */

import {Container as BaseContainer} from 'unstated';

/* CONTAINER */

class Container<State extends object> extends BaseContainer<State> {

  private _listeners: Function[];
  private _suspendNr = 0;
  private _updateSuspended = false;

  async setState ( updater: ( ( prevState: Readonly<State> ) => Partial<State> | State | null) | Partial<State> | State | null, callback?: Function ): Promise<void> {

    let nextState;

    if ( typeof updater === 'function' ) {
      nextState = ( updater as Function )( this.state ); //TSC
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

  suspend (): void {
    this._suspendNr++;
  }

  unsuspend ( callback?: Function ): void {
    if ( !this._suspendNr ) return;
    this._suspendNr--;
    if ( !this._suspendNr && this._updateSuspended ) this._updateEmit ( callback );
  }

  private _updateEmit ( callback?: Function ): void {

    this._updateSuspended = !!this._suspendNr;

    if ( this._updateSuspended ) return;

    const promises = this._listeners.map ( listener => listener () );

    Promise.all ( promises ).then ( () => {
      if ( callback ) callback ();
    });

  }

}

/* EXPORT */

export {Container};
