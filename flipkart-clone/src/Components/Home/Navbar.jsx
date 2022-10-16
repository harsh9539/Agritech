import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../Constants/data'

//overwriting
const BoxComp = styled(Box)(({theme}) => ({
display:'flex',
margin:"90px 130px 0 130px",
justifyContent:"space-between",
background:'white',
overflow:'hidden',
[theme.breakpoints.down('md')]: {
    margin:"0 0 0 0",
}
}));
const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const Navbar = () => {
    return (
        <Box style={{background:'white',marginTop:30}}>
        <BoxComp>
            {
                navData.map((data)=>{
                    return(
                    <Container>
                        <img style={{height:90,width:150,margin:"0 20px"}} src={data.url} alt="nav"/>
                        <Text>{data.text}</Text>
                    </Container>
                    )
                })
            }
        </BoxComp>
        </Box>
    )
}

export default Navbar
