import Keypress from './Keypress'

function ComponentC() {

    function turnPink() {
        const componentC = document.getElementById('component-c')
        if (componentC) {
            componentC.style.backgroundColor = 'pink'
        }
    }

    function turnYellow() {
        const componentC = document.getElementById('component-c')
        if (componentC) {
            componentC.style.backgroundColor = 'yellow'
        }
    }
    return (
        <div id={'component-c'} style={{ minHeight: '50vh' }}>
            ComponentC
            <Keypress
                shortcut='shift s'
                description='I turn the component Pink'
                callbackFn={turnPink}
            />
            <Keypress
                shortcut='shift a'
                description='I turn the component Yellow'
                callbackFn={turnYellow}
            />
        </div>
    )
}

export default ComponentC