import { Box, Button, styled } from '@mui/material'
import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { useState } from 'react';
import { payUsingPaytm } from '../../service/api.js';
import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))


const Image = styled('img')({
    width:370,
    height:300,
    padding: '15px'
})

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '44%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}))



const ActionItem = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = product;
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    const buyNow = async () => {
        console.log("buyhoja")
        let response = await payUsingPaytm({ amount: 500, email: "harsh9539@gmail.com" })
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        console.log(information);
        post(information)
    }
    return (
        <LeftContainer>
            <Box style={{
                padding: '15px 20px',
                border: '1px solid #f0f0f0',
                width: '90%'
            }}>
                <Image src={product.detailUrl} />
            </Box>
            <StyledButton onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#22b822' }} variant='contained'><ShoppingCartIcon /> ADD TO CART</StyledButton>
            <StyledButton onClick={() => buyNow()} style={{ background: '#22c922' }} variant='contained'><BoltIcon />Buy now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem
