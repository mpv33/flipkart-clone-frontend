import axios from 'axios';
const url = process.env.REACT_APP_API_BASE_URL

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/api/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        const msg=error.response?.data
        alert(msg)
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/api/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
        const msg=error.response?.data?.message
        alert(msg)
    }
}
export const getProductList = async () => {
    try {
        return await axios.get(`${url}/api/products/`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
        const msg=error.response?.data?.message
        alert(msg)
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/api/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
        const msg=error.response?.data?.message
        alert(msg)
    }
}

