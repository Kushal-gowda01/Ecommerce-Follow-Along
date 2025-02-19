const express=require('express');
const app=express();
const connectDB=require('./src/database/db');
const userRouter=require('./src/controllers/user');
//const productRouter = require('./src/controllers/product');



require('dotenv').config({
    path:'./src/Config/.env'
});

const port=process.env.port;
const url=process.env.db_url;

app.listen(3000,async ()=>{
    console.log(`Server is running on port ${port}`);
    try{
        await connectDB(url);
    }catch(error){
        console.log(error);
    }
})

app.use(express.json());

 app.use('/auth',userRouter)
 app.use('/product',productRouter);
 
 app.get('/',(req,res)=>{
    res.send('Hello from the server!')
})