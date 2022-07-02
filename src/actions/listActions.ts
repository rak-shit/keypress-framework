import { ADD_SHORTCUT, REMOVE_SHORTCUT } from "./types"

export const addShortcut = (data: {component: string, description: string, shortcut: string, listenerObj: any}) => {
    return {
        type: ADD_SHORTCUT,
        payload: data
    }
}

export const removeShortcut = (data: {index: number, component: string}) => {
    return {
        type: REMOVE_SHORTCUT,
        payload: data
    }
}