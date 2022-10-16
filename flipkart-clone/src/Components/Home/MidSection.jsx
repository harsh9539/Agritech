import { Grid,styled } from "@mui/material";
// import { Box } from "@mui/system";


import { imageURL } from "../../Constants/data";

const Wrapper = styled(Grid)`
margin-top:20px;
justify-content:space-between;
padding:30px;
background:#f2f2f2
`
const Image = styled('img')(({theme}) => ({
    marginTop:10,
    width: '100%',
    display:'flex',
    justifyContent:"space-between",
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}));


const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image=>(
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img style={{width:'100%'}} src = {image} alt='immage'/>
                    </Grid>
                ))
            }
        </Wrapper>
        {/* <Image src={url} alt="img"/> */}
        </>
    )
}

export default MidSection;