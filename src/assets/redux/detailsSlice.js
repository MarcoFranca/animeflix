import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id:""
}

const detailsSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        setId:(state, action)=>{
            state.id = action.payload
        }
    }
})

export const {setId} = detailsSlice.actions;
export default detailsSlice.reducer;