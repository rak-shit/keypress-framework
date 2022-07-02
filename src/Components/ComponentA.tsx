import Keypress from './Keypress'

function ComponentA() {

    function turnGreen() {
        const componentA = document.getElementById('component-a')
        if (componentA) {
            componentA.style.backgroundColor = 'green'
        }
    }

    return (
        <div id={'component-a'} style={{ minHeight: '50vh' }}>
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