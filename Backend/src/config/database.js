const URI = 'mongodb+srv://rajnish:Z3AxEOkXmvMBZr7B@cluster-1.ophup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1/shopit'; 
const mongoose = require('mongoose'); 

const connectToDatabase =async(url)=>{
    try{
       await mongoose.connect(URI)
    }catch(error){
        console.log(error)
    }
}

module.exports ={connectToDatabase};