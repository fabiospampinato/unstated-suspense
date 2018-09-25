# Unstated Suspense

Unstated container with support for suspending/unsuspending updates propagation.

It allows you to update the state multiple times while still triggering only one update of the components.

## Install

```sh
npm install --save unstated-suspense
```

## Usage

```ts
import {Container} from 'unstated-suspense';

class App extends Container {
  state = { foo: 1, bar: 2 };
  update () {
    this.suspend (); // After calling `suspend` the components won't be notified of any state update
    this.setFoo ( 11 ); // This will change the state, but it won't trigger an update of the components
    this.setBar ( 12 ); // This will change the state, but it won't trigger an update of the components
    this.unsuspend (); // Now updates are no longer suspended. If the state has been updated it will notify the components, just once (instead of twice in this particular case)
  }
  setFoo ( foo ) {
    this.setState ({ foo });
  }
  setBar ( bar ) {
    this.setState ({ bar });
  }
}
```

## Related

- **[unstated-with-containers](https://github.com/fabiospampinato/unstated-with-containers)**: Higher-Order Component for providing unstated containers to a component.
- **[unstated-connect2]()**: Easily connect your containers to components, without sacrificing performance.
- **[unstated-compose](https://github.com/fabiospampinato/unstated-compose)**: Compose multiple containers into one.

## License

MIT © Fabio Spampinato
