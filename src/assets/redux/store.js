import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import apiReducer from "./apiSlice"
import valueReducer from "./valueSlice"

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer:{
        api: apiReducer,
        value: valueReducer,
    },
    middleware: customizedMiddleware
})