const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require('../db/conn');
const User = require("../models/userschema");

router.get('/', (req,res)=>{
    res.send('Hello world from the router');
});

//using promises
// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword} =req.body;
//     // console.log(name);
//     // console.log(email);
//     // res.json({message:req.body});
//     // res.send('mera page');
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({ error :"plz fill the form properly"});
//     }

//     User.findOne({email:email}).then((userexist)=>{
//         if(userexist){
//             return res.status(422).json({error: "Email already exist"});
//         }
//         const user = new User({name,email,phone,work,password,cpassword});
//         // const user = new User({name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword}); actually in this we should fill but as both keys and value are sem so we can write only one, left onbe is credential types and right ones are user gonna enter
    
//         user.save().then(()=>{
//             res.status(201).json({message: "user registered sucessfully"});
//         }).catch((err)=>res.status(500).json({error:"failed to register"}));    
//     }).catch(err =>{console.log(err)});

// });

//async-await
router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword} =req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({ error :"plz fill the form properly"});
    }

    try{
        const userexist = await User.findOne({email:email})
        if(userexist){
            return res.status(422).json({error: "Email already exist"});
        }
        else if(password!=cpassword){
            return res.status(422).json({error:"password are not matching"});
        }else{
            const user = new User({name,email,phone,work,password,cpassword});
         
            await user.save();
            res.status(201).json({message: "user registered successfully"});
        }
    } catch(err){
        console.log(err);
    }
});

router.post('/login',async(req,res)=>{
    try{
        let token;
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(422).json({ error :"plz fill the form properly"});
        }
        const existemail = await User.findOne({email:email})
        const existpassword = await bcrypt.compare(password, existemail.password);
        token = await existemail.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now() + 2592000000),
            httpOnly:true
        });
        if(existemail && existpassword){
            return res.json({ message: "login successful"});
        }
        else{
            return res.status(422).json({error:"Invalid credential"});
        }
    }catch(err){
        console.log(err);
    }
});

module.exports  = router;