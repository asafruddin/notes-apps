import { createSlice } from "@reduxjs/toolkit"

const initialState: {} = {biometric_key: undefined, is_login: false}

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        StoreKey(state: any, action: any) {
            const {biometric_key, is_login} = action.payload;

            state.auth.push({
                biometric_key, is_login
            })
        }
    }
})

export const {StoreKey} = authSlice.actions;
export default authSlice.reducer;