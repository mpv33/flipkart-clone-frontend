import * as actionTypes from '../constants/productConstant';
import axios from 'axios';
import { products } from '../../constant/data';

export const getProducts = () => async (dispatch) => {
    try {
       // const { data } = await axios.get(`http://localhost:8000/products`);
       const data=products
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
       // const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        const data=products.filter((item)=>item?.id===id)
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data[0] });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};


export const removeProductDetails = () => (dispatch) => {
    
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};
