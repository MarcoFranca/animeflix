import {createSlice} from "@reduxjs/toolkit";

const initialState = {

//************* api config  ***************

    url:"https://kitsu.io/api/edge/",
    category:"anime",
    pageLimit:"&page[limit]=10",
    pageOffset:"&page[offset]=0A",

//****************  imput Search  *******************

    text:"",
    displayText:"",
    filter: {},
}

export const apiSlice = createSlice({
    name: "api",
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

        setPageLimit: (state, action) =>{
            state.pageLimit = `&page[limit]=${action.payload}`
        },

        setPageOffset: (state, action) =>{
            state.pageOffset = `&page[offset]=${action.payload}`
        },

    }
})

export const {setCategory, setText, setDisplayText, setPageLimit, setPageOffset} = apiSlice.actions;

export default apiSlice.reducer;