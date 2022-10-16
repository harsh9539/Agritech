import axios from 'axios';

const URL = ''||'http://localhost:8000';
export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (err) {
        console.log(err.message);
    }
}

// export default authenticateSignup

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (err) {
        console.log(err.message);
        return err.response;
    }
}


export const payUsingPaytm = async(data)=>{
    try{
        console.log("api call hone wali hai")
        let response = await axios.post(`${URL}/payment`,data);
        console.log("api call hogi")
        console.log(response.data);
        return response.data;
    }catch(err){
        console.log('error while calling paytm api',err)
    }
}