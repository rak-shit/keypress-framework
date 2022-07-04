# React Key Press

A Keypress wrapper component which will register keyboard shortcuts to the component
## Use and Setup

```sh
$ git clone git@github.com:jquense/keypress-framework.git
$ cd keypress-framework
$ npm install
$ npm start
```

- Open [localhost:3000/](http://localhost:3000/).

We use the `keypress.js` package from `npm` for this project. We build the framework around that package.

After the cloning the project you need to import the `Keypress.tsx` into the component you want to set the shortcut to.

#### Component.tsx

```js
import Keypress from './Keypress'

function ComponentA() {

    function turnGreen() {
        const componentA = document.getElementById('component-a')
        if (componentA) {
            componentA.style.backgroundColor = 'green'
        }
    }

    return (
        <div id={'component-a'}>
            Component A
            <Keypress
                shortcut='shift s'
                description='I turn the component Green'
                callbackFn={turnGreen}
            />
        </div>
    )
}

export default ComponentA
```
You are also provided with the list of shortcuts mapped to the components they are registered to. You have a deregister button beside each shortcut which will unregister the shortcut with the component.

We also store the shortcuts mapped to their respective components in the redux store. This is how we show the list of shortcuts and their respective component.

## Packaging this as a library

For the sake of deregistering we had to use external code to store the shortcuts in the redux store but if we remove the deregister functionality we can simply package this as a `npm` library. 

We can use a `deregister` prop which will take a boolean value to deregister the shortcut.

The next version of the library would include this.

