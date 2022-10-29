import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    limit:10,
    offset:0,
    total:0,
}

export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers:{
        setLimit: (state, action)=>{
            state.limit = action.payload
        },
        setOffset: (state, action) =>{
            state.offset = action.payload
        },
        setTotal: (state, action) =>{
            state.total = action.payload
        },
    }
})

export const {setLimit, setOffset,  setTotal} = paginationSlice.actions;

export default paginationSlice.reducer;