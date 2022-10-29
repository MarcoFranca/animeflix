import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import apiReducer from "./apiSlice"
import valueReducer from "./valueSlice"
import paginationReducer from "./paginationSlice"
import detailsReducer from "./detailsSlice"
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer:{
        api: apiReducer,
        value: valueReducer,
        pagination: paginationReducer,
        details: detailsReducer
    },
    middleware: customizedMiddleware
})