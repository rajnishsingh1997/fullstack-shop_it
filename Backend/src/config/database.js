const URI = 'mongodb+srv://rajnish:Qwerty123*@cluster0.3meztln.mongodb.net/ShopIt?retryWrites=true&w=majority&appName=Cluster0'
const mongoose = require('mongoose'); 

const connectToDatabase =async(url)=>{
    try{
       await mongoose.connect(URI)
    }catch(error){
        console.log(error)
    }
}

module.exports ={connectToDatabase};