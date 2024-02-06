import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const { payload: newItem } = action;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);

            if (existingItemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex] = { ...newItem };
                return { ...state, cartItems: updatedCartItems };
            } else {
                return { ...state, cartItems: [...state.cartItems, newItem] };
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
        default:
            return state;
    }
}