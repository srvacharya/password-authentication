const express= require("express");
const path= require ("path");
const app=express();
const mongoose= require("mongoose");
const User=require('./model.js');
const mydata="mongodb+srv://3226saurav:Lilwayne2222@cluster0.yqhnun0.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mydata,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('connected',()=>{
    console.log("connection established to mongodb");
})
app.use(express.json());
app.use(express.urlencoded());

const port=3700;

app.get('/',(req, res)=> {
    res.sendFile(path.join(__dirname,'form.html'));
})

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body;
    const newUser=new User({email,password});
    newUser.save();
   
})
app.listen(port,()=>{
    console.log("The server is listening ")
})
