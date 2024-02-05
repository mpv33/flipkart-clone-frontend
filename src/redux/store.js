import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from './reducers/cartReducer';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    applyMiddleware(...middleware)
);

export default store;