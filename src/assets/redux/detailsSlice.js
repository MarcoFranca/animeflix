import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    details: null,
    relationshipItens: []
}

const detailsSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        setDetails:(state, action)=>{
            state.details = action.payload
        },
        setRelationshipItens:(state, action)=>{
            state.relationshipItens.unshift(action.payload)
        },
        clearRelationshipItens:(state)=>{
            state.relationshipItens.length = 0
        },
    }
})

export const {setDetails, clearRelationshipItens, setRelationshipItens} = detailsSlice.actions;
export default detailsSlice.reducer;