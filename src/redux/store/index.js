import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "../shopReducer/index"
import cartReducer from "../cartReducer/index"


export default configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})