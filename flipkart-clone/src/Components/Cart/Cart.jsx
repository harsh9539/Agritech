
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { payUsingPaytm } from '../../service/api';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';
import { post } from '../../utils/paytm';

const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('sm')]:{
        padding:'15px 0'
    }
}))

const Header = styled(Box)`
padding: 15px 24px;
background:white;
`
const ButtonWrapper = styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 /10%);
border-top: 1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
display:flex;
margin-left:auto;
background:#22b822;
color:#fff;
width:250px;
height:51px;
border-radius:2px;
`
const LeftComp = styled(Grid)(({theme})=>({
    paddingRight:"15px",
    [theme.breakpoints.down('md')]:{
        marginBottom:30
    }
}))


const Cart = () => {
    const {cartItems} = useSelector(state=> state.cart);
    const buyNow =  async()=>{
        console.log("buyhoja")
        let response =await payUsingPaytm({amount:500,email:"harsh9539@gmail.com"})
        let information = {
            action:'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        console.log(information);
        post(information)
    }
    return (
        <>
            {
                (cartItems.length>0)?
                <Container container>
                    <LeftComp item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item=>(
                                <CartItem item={item}/>
                            ))
                        }
                    <ButtonWrapper>
                        <StyledButton onClick={()=>buyNow()}>Place Order</StyledButton>
                    </ButtonWrapper>
                    </LeftComp>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems}/>
                    </Grid>
                </Container>
                :<Box><EmptyCart/></Box>
            }
        </>
    )
}

export default Cart
