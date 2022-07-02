import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addShortcut } from '../actions/listActions'
import { FindReact } from './customHook'
const keypress = require('keypress.js')

type KeypressProps = {
    shortcut: string
    description: string
    callbackFn: () => void
}

function Keypress({shortcut, description, callbackFn}: KeypressProps) {
    const dispatch = useDispatch()
    const listener = new keypress.Listener()
    const ref: any = useRef()
    const [parentName, setParentName] = useState()
    const [listenerObj, setListenerObj] = useState(undefined)

    useEffect(() => {
        const listenerObj = listener.simple_combo(shortcut, callbackFn)
        setListenerObj(listenerObj)
        if (ref?.current) {
            let node = FindReact(ref.current, 1)
            setParentName(node.type.name)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (parentName !== undefined) {
            dispatch(addShortcut({component: parentName, description: description, shortcut: shortcut, listenerObj: listenerObj}))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parentName])

    return (
        <div ref={ref}>
            
        </div>
    )
}

export default Keypress