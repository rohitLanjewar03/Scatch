const express = require('express');
const app = express();
const ejs = require('ejs')
const cookieParser = require('cookie-parser');
const path = require('path')
const ownerRouter = require('./routes/ownerRouter')
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter')


const db = require('./config/mongoose-connection')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs")

app.use('/owners',ownerRouter)
app.use('/products',productRouter)
app.use('/users',userRouter)


app.get('/',(req,res)=>{
    res.send('hiii')
})

app.listen(3000,(req,res)=>{
    console.log('Lisenting')
})