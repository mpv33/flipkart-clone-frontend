import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import { ButtonGroup, Button, styled } from "@mui/material";
import { useEffect } from "react";
import { addToCart } from "../../redux/actions/cartActions";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({ id }) => {
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(addToCart(id, counter))
    }, [counter])


    const handleIncrement = () => {
        setCounter(counter => counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1);
    };

    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} disabled={counter == 1}>-</StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;