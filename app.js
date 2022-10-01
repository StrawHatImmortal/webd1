const express = require("express");
const app = express();

app.get('/', (request,response) =>{
    response.send('Hello World from the server');
});

app.get('/about', (req,res)=>{
    res.send('Hello My name is Sneh');
});

app.get('/contact',(req,res)=>{
    res.send('Hello u can contact me by mail snehshah1675@gmail.com');
});

app.get('/login', (req,res)=>{
    res.send('Hello users please login to continue.');
});

app.get('/register',(req,res)=>{
    res.send('New users register here to continue');
})
app.listen(1675, ()=>{
    console.log('Server running on port 1675');
})