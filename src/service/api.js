import axios from 'axios';
import { products } from '../constant/data'
const url = process.env.REACT_APP_API_BASE_URL

//const url='https://flipkart-clone-server-m.vercel.app'

export const authenticateLogin = async (user) => {
    try {
        const response = await axios.post(`${url}/api/login`, user);
        return {
            data: response?.data,
            err: null
        }
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return {
            data: null,
            err: error.response.data.message
        }
    }
};

export const authenticateSignup = async (user) => {
    try {
        const response = await axios.post(`${url}/api/signup`, user);
        return {
            data: response?.data,
            err: null
        }
    } catch (error) {
        console.log('Error while calling signup API: ', error);
        return {
            data: null,
            err: error.response.data.message
        }
    }
}
export const fetchUserDetails = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found');
        }
        const response = await axios.get(`${url}/api/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {
            data: response.data,
            err: null
        }
    } catch (error) {
        console.log('Error while calling user details API: ', error);
        return {
            err: error.response.data.message,
            data: null
        }
    }
};

export const getProductList = async () => {
    try {
        return await axios.get(`${url}/api/products/`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
        return { data: products }
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/api/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
        const data=products.filter((item)=>item?.id===id)
        return data[0]

    }
}

