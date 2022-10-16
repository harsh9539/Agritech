import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { Connection } from './DataBase/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import {v4 as uuid} from 'uuid';
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);


const PORT = process.env.PORT||8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI||`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.egujj.mongodb.net/FlipDB`;


Connection(URL);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('flipkart-clone/build'))
}


app.listen(PORT,()=>console.log(`server is running on port ${PORT} `))
DefaultData();



export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams ={};
paytmParams['MID'] = process.env.PAYTM_MID
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'harsh9539@gmail.com';
paytmParams['MOBILE_NO'] = '1234567890';



