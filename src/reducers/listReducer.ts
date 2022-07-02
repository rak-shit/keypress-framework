import { ADD_SHORTCUT, REMOVE_SHORTCUT } from '../actions/types'

const initialState = {
    shortcuts: {}
}

export const listReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_SHORTCUT:
            const shortcuts: any = {...state.shortcuts}
            if (shortcuts[action.payload.component] === undefined) {
                shortcuts[action.payload.component] = [{component: action.payload.component, description: action.payload.description, shortcut: action.payload.shortcut, listenerObj: action.payload.listenerObj}]
            } else {
                shortcuts[action.payload.component] = [...shortcuts[action.payload.component], {component: action.payload.component, description: action.payload.description, shortcut: action.payload.shortcut, listenerObj: action.payload.listenerObj}]
            }
            return {
                shortcuts: shortcuts
            }
        case REMOVE_SHORTCUT:
            let presentShortcuts: any = {...state.shortcuts}
            const filteredShortcuts = presentShortcuts[action.payload.component].filter((item: any, index: any) => index !== action.payload.index)
            if (filteredShortcuts.length === 0) {
                delete presentShortcuts[action.payload.component]
            } else {
                presentShortcuts[action.payload.component] = filteredShortcuts
            }
            return {
                shortcuts: presentShortcuts
            }
        default:
            return state
    }
}