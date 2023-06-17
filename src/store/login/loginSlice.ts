import { createSlice } from '@reduxjs/toolkit'

export interface loginState {
    value: boolean
}

const initialState: loginState = {
    value: false
}

export const loginSlice = createSlice({
    name: "hasUserLogin",
    initialState,
    reducers: {
        userIsLogin: (state) => {
            state.value = true
        },
        userIsNotLogin: (state) => {
            state.value = false
        }
    }
})


export const { userIsLogin, userIsNotLogin } = loginSlice.actions;
export default loginSlice.reducer;