require('dotenv').config()

const express=require('express');
const app=express();
const requestIp = require('request-ip');
const route=require('./routes/route')


app.use(express.json())
app.use(requestIp.mw())
app.use(express.urlencoded({extended:true}))

app.use("/",route)

const port = process.env.PORT || 3030;

app.listen(port,()=>console.log(`running on port ${port}`))
