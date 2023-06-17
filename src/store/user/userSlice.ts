import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    userId: string | null
}

const initialState: userState = {
    userId: null
}

export const userSlice = createSlice({
    name: "userId",
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload
        },
        clearUserId: (state) => {
            state.userId = null
        }
    }
})

export const { setUserId, clearUserId } = userSlice.actions

export default userSlice.reducer