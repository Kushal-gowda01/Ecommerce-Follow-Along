const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/database/db');

dotenv.config({
    path:'./src/config/.env'
});

const app = express();
const port =  3000;
const url = process.env.db_url;

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.listen(port,async()=>{
    try{
        await connectDB(url);
        console.log(`Server is running on port ${port}`)
    }
    catch(err){
        console.log(err);
    }
})


