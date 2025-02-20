const express = require('express'); 
const app = express();
var cors = require('cors')

const {connectToDatabase} = require("./config/database")
const User = require("./models/userModel"); 

app.use(express.json())
app.use(cors())


app.post("/signup" , (req,res)=>{
   
})

connectToDatabase().then(()=>{
    console.log("connection Made")
    app.listen(3000,()=>{
        console.log("server started")
    })
}).catch((err)=>{
    console.log(err)
})