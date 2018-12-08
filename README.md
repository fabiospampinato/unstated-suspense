# Unstated Suspense

Suspend/unsuspend updates propagation from your containers.

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

**Note**: If you call `suspend` N times you should call `unsuspend` N time also to resume updates propagation.


## Related

- **[unstated-with-containers](https://github.com/fabiospampinato/unstated-with-containers)**: Higher-Order Component for subscribing to containers.
- **[unstated-connect2](https://github.com/fabiospampinato/unstated-connect2)**: Connect containers to components, without sacrificing performance.
- **[unstated-hmr](https://github.com/fabiospampinato/unstated-hmr)**: Preserve containers' states across Hot-Module-Replacements.
- **[unstated-compose](https://github.com/fabiospampinato/unstated-compose)**: Compose multiple containers into one.
- **[unstated-compose-suspense](https://github.com/fabiospampinato/unstated-compose-suspense)**: Add suspend/unsuspend support to `unstated-compose`.
- **[unstated-compose-suspense-middleware](https://github.com/fabiospampinato/unstated-compose-suspense-middleware)**: Add middlewares support to `unstated-compose-suspense`.
- **[unstated-suspense-autosuspend](https://github.com/fabiospampinato/unstated-suspense-autosuspend)**: Automatically use unstated-suspense on all your container's API methods.
- **[unstated-suspense-middleware](https://github.com/fabiospampinato/unstated-suspense-middleware)**: Add middlewares support to `unstated-suspense`.

## License

MIT © Fabio Spampinato
