import { getProductById } from '../../service/api';
import * as actionTypes from '../constants/cartConstants';

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await getProductById(id)
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

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