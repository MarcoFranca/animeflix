import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    animeInfo:{},
    userCategory:'Anime',
    anime:false,
    manga:false,
    wait:false,
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
        setAnime: (state, action)=>{
            state.anime = action.payload
        },
        setManga: (state, action)=>{
            state.manga = action.payload
        },
        setWait: (state, action)=>{
            state.wait = action.payload
        },
    }

})

export const {setAnimes, setUserCategory, setAnime, setManga, setWait} = valueSlice.actions;

export default valueSlice.reducer;