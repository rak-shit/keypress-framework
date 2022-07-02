import { useDispatch, useSelector } from 'react-redux'
import { removeShortcut } from '../actions/listActions'
const keypress = require('keypress.js')

function List() {
    const listener = new keypress.Listener()
    const shortcutList = useSelector((state: any) => state.shortcutList)
    const dispatch = useDispatch()

    function handleDeregister(index: number, key: string, listenerObj: any) {
        dispatch(removeShortcut({index: index, component: key}))
        listener.unregister_combo(listenerObj)
    }
    return (
        <div>
            {
                Object.entries(shortcutList.shortcuts).map(([key]) => {
                    return (
                        <div>
                            <div><h2>Shortcuts for {key}</h2></div>
                            <div>
                                {
                                    shortcutList?.shortcuts?.[key].map((shortcut: any, index: number) => {
                                        return (
                                            <>
                                                <div>
                                                    {shortcut.shortcut} {' -> '} {shortcut.description} <button onClick={() => handleDeregister(index, key, shortcut.listenerObj)}>Deregister</button>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List