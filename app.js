const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // Add this line
const app = express();
const mongoose = require("mongoose");
const User = require('/home/saurav/Documents/node auth/model.js');

const mydata = "mongodb+srv://3226saurav:Eminem2222@cluster0.oif7qqw.mongodb.net/nod_auth?retryWrites=true&w=majority";
const db=mongoose.connect(mydata, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log("connection established to mongodb");
});
  app.use(express.json());

// Replace express.urlencoded() with bodyParser.urlencoded()
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).send('Internal Server Error');
    }
});



const port = 3800;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});



app.post("/signup", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);

    try {
        
        const existingUser= await User.findOne({email:email})
        const existingPassword=await User.findOne({password:password})
    if(existingUser && existingPassword){
        res.sendFile(path.join(__dirname,'socket.html'))
    }
    else{
        res.send("please try again")
    }
        
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log("The server is listening ");
});
