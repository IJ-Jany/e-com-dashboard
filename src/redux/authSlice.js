import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:localStorage.getItem("authID") ?  JSON.parse(localStorage.getItem("authID")) : null,
   // user: localStorage.getItem("auth") ?  JSON.parse(localStorage.getItem("auth")) : {}
  user: {}
}

export const auth = createSlice({
    name:"userAuth",
    initialState,
    reducers: {
        setAuth:(state, {payload} )=> {
            state.user = payload
            localStorage.setItem("auth", JSON.stringify(payload))
        },
        setId:(state, {payload} )=> {
            state.id = payload
            localStorage.setItem("authID", JSON.stringify(payload))
        }
    }
})

export const {setAuth, setId} = auth.actions
export default auth.reducer 