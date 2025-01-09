import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    authorizationModalVisibility:boolean
}

const initialState :initialStateType ={
        authorizationModalVisibility:false
}

const modalSlice = createSlice({
    initialState,
    name:"Modal",
    reducers:{
        setAuthorizationModalVisibility(state){
            state.authorizationModalVisibility = !state.authorizationModalVisibility
        }
    }
})

export const  { setAuthorizationModalVisibility } = modalSlice.actions
export default modalSlice.reducer