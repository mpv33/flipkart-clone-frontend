import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';
import { products } from '../../constant/data';

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
       // const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        const data=products.filter((item)=>item?.id===id)
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data[0], quantity } });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};