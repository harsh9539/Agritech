import { Box, Button, styled, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = styled(Typography)(({ theme }) => ({
    color: "#7DCE13",
    fontSize: 30,
    fontWeight: 600
}))
const Touch = styled(Typography)(({ theme }) => ({
    color: "#2B7A0B",
    fontSize: 25,
    fontWeight: 600
}))
const Btn = styled(Button)(({ theme }) => ({
    backgroundColor: '#7DCE13',
    color: 'white'
}))

const Tf = styled(TextField)(({ theme }) => ({
    width: 400
}))

const ContactUs = () => {
    return (
        <Box style={{ backgroundColor: 'white' }}>
            {/* <Typography style={{textAlign:"center"}}>Contact Us</Typography> */}
            <Box style={{ display: 'flex', justifyContent: 'space-around', width: '90%', margin: 70 }}>
                <Box>
                    <img style={{ height: 400, width: 400 }} src="https://user-images.githubusercontent.com/76143659/185896869-5ab776a8-7ad5-4fb1-837e-4bd88e76adc3.png" alt="contactus" />
                </Box>
                <Box>
                    <Box>
                        <Contact>Contact Us</Contact>
                        <br></br>
                        {/* <Touch>Get In Touch With Us</Touch> */}
                    </Box>
                    <form method='post' action='/' style={{ display: 'flex', flexDirection: 'column' }}>
                        <Tf id="outlined-basic" label="Name" variant="outlined" />
                        <br></br>
                        <br></br>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <br></br>
                        <br></br>
                        <TextField label="Message" />
                        <br></br>
                        <br></br>
                        <Btn>Submit</Btn>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactUs
