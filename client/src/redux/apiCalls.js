import axios from 'axios';
import { publicRequest, userRequest } from '../requestMethods';
import { loginStart, loginSuccess, loginFailure, logOut, updateFailure, updateSuccess, updateStart } from './userRedux';
import config from '../../config';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const update = async (dispatch, user, id) => {
    dispatch(updateStart());
    try {
        const res = await userRequest.put(`/users/${id}`, user);
        dispatch(updateSuccess());
    } catch (e) {
        dispatch(updateFailure());
    }
};

export const logout = (dispatch) => {
    dispatch(logOut());
};
