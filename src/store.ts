import { configureStore } from "@reduxjs/toolkit"
import { listReducer } from "./reducers/listReducer"

export default configureStore({
    reducer: {
        shortcutList: listReducer
    }
})
