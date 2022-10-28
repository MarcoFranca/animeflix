import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    url:'https://kitsu.io/api/edge/',
    category:'anime',
    filter:'',
    text: '',
    displayText:""
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

        setDisplayText: (state, action) =>{
            state.displayText = action.payload
        },
    }
})

export const {setCategory, setText, setDisplayText} = apiSlice.actions;

export default apiSlice.reducer;