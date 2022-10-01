const mongoose = require('mongoose');
const uri = process.env.DATABASE;

mongoose.connect(uri,{
    UseNewUrlParser: true
}).then(()=>{
    console.log('connected');
}).catch((err) => console.log('error'));