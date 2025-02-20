const express = require('express'); 
const app = express();

const {connectToDatabase} = require("./config/database")

connectToDatabase().then(()=>{
    console.log("connection Made")
    app.listen(3000,()=>{
        console.log("server started")
    })
}).catch((err)=>{
    console.log(err)
})