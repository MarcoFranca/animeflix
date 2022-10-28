import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    animeInfo:{},
    userCategory:'Anime',
    categoryColor:false,
    anime:false,
    manga:false,
}

export const valueSlice = createSlice({
    name:'value',
    initialState,
    reducers:{
        setAnimes: (state, action)=>{
            state.animeInfo = action.payload
        },
        setUserCategory: (state, action)=>{
            state.userCategory = action.payload
        },
        setCategoyColor: (state, action)=>{
            state.categoryColor = action.payload
        },
        setAnime: (state, action)=>{
            state.anime = action.payload
        },
        setManga: (state, action)=>{
            state.manga = action.payload
        },
    }

})

export const {setAnimes, setUserCategory, setCategoyColor, setAnime, setManga} = valueSlice.actions;

export default valueSlice.reducer;