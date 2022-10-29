import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import apiReducer from "./apiSlice"
import valueReducer from "./valueSlice"
import paginationReducer from "./paginationSlice"

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer:{
        api: apiReducer,
        value: valueReducer,
        pagination: paginationReducer
    },
    middleware: customizedMiddleware
})