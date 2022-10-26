import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    animeInfo:{},
}

export const valueSlice = createSlice({
    name:'values',
    initialState,
    reducers:{
        setAnimes: (state, action)=>{
            state.animeInfo = action.payload
        }
    }

})

export const {setAnimes} = valueSlice.actions;

export default valueSlice.reducer;