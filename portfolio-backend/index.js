const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.get('/',(req,res)=>{
    res.send("Home Server");
})

app.listen(4000,()=>{
    console.log(`Running in port 4000`);
})