import axios from 'axios';
import { publicRequest, userRequest } from '../requestMethods';
import {
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    getProductFailure,
    getProductStart,
    getProductSuccess,
} from './productRedux';
import { loginStart, loginSuccess, loginFailure, logOut } from './userRedux';
// import config from '../../config';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const getProduct = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const logout = (dispatch) => {
    dispatch(logOut());
};
