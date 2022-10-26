import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    url:'https://kitsu.io/api/edge/',
    category:'anime',
    filter:'',
    text:''
}

export const apiSlice = createSlice({
    name:'api',
    initialState,
    reducers:{
        setCategory: (state, action) =>{
            state.category = action.payload
        },
        setText: (state, action) =>{
            state.filter = (action.payload === "")?"":"?filter[text]="
            state.text = action.payload
        },
    }
})

export const {setCategory, setText} = apiSlice.actions;

export default apiSlice.reducer;