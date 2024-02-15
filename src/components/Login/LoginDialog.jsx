import React, { useState, useEffect } from 'react';

import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';

import { authenticateLogin, authenticateSignup, fetchUserDetails } from '../../service/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    &:hover {
        background: #FF7F4F; /* Change background color on hover */
        color: #fff; /* Change text color on hover */
        cursor: pointer; /* Change cursor on hover */
    }
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
// height: 70vh;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 40%;
    height: 84%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;

const loginInitialValues = {
    email: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ open, setOpen, setAccount }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState(false);
    const [account, toggleAccount] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const loginUser = async () => {
        try {
            const { data, err } = await authenticateLogin(login);
            if (err) {
                toast.error(err)
                return
            }
            if (data?.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user',login.email)
                toast.success('Login Success')
                setTimeout(() => {
                    setAccount(login.email);
                    setLogin(loginInitialValues);
                    setOpen(false);
                }, 1000)
            }
        } catch (error) {
            toast.error('Something went wrong !')
        }

    };

    const signupUser = async () => {
        try {
            const { data, err } = await authenticateSignup(signup);
            if (err) {
                toast.error(err)
                return
            }
            if (data) {
              
                toast.success('Signup Success')
                setTimeout(()=>{
                    handleClose()
                },2000)
            }
        }
        catch (err) {
            toast.error('Something went wrong !')
        }


    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setSignup(signupInitialValues)
        showError(false)

    }
    const isFilledAll = () => {
        return signup.email && signup.firstname && signup.lastname && signup.password && signup.phone
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='email' label='Enter Email' />
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                {error && <Error>Please enter valid credential number</Error>}
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton
                                    onClick={() => loginUser()}
                                    disabled={!login?.email || !login?.password}
                                >Login</LoginButton>
                                {/* <Text style={{textAlign:'center'}}>OR</Text>
                            <RequestOTP>Request OTP</RequestOTP> */}
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper> :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                                <LoginButton onClick={() => signupUser()}
                                    disabled={!isFilledAll}
                                 
                                >Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
            <ToastContainer />
        </Dialog>
    )
}

export default LoginDialog;