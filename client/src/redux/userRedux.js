import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logOut: (state) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
        },
        updateStart: (state) => {
            // state.currentUser = state.currentUser
            state.isFetching = true;
        },
        updateSuccess: (state) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
        },
        updateFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { loginStart, loginFailure, loginSuccess, logOut, updateFailure, updateStart, updateSuccess } =
    userSlice.actions;
export default userSlice.reducer;
