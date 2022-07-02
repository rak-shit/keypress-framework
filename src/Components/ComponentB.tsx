import Keypress from './Keypress'

function ComponentB() {
    function turnRed() {
        const componentB = document.getElementById('component-b')
        if (componentB) {
            componentB.style.backgroundColor = 'red'
        }
    }
    function turnBlue() {
        const componentB = document.getElementById('component-b')
        if (componentB) {
            componentB.style.backgroundColor = 'blue'
        }
    }
    return (
        <div id={'component-b'} style={{ minHeight: '50vh' }}>
            ComponentB
            <Keypress
                shortcut='shift s'
                description='I turn the component Red'
                callbackFn={turnRed}
            />
            <Keypress
                shortcut='shift a'
                description='I turn the component Blue'
                callbackFn={turnBlue}
            />
        </div>
    )
}

export default ComponentB