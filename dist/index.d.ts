import { Container as BaseContainer } from 'unstated';
declare class Container<State extends object> extends BaseContainer<State> {
    _listeners: Function[];
    _suspended: boolean;
    _updateSuspended: boolean;
    setState(updater: State | ((prevState: State) => State), callback?: () => void): Promise<void>;
    suspend(): void;
    unsuspend(callback?: any): void;
    _updateEmit(callback?: any): void;
}
export { Container };
