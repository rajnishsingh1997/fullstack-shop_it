const jwt = require('jsonwebtoken');
const UserModal = require("../models/userModel")

async function userCheckMiddleware(req, res, next) {
  try {
    const { authToken } = req.cookies;
    if (!authToken) {
      throw new Error("Invalid Token");
    }
    const decodedUserId = await jwt.verify(authToken,"Qwerty123*"); 
    const user = await UserModal.findById(decodedUserId);
    if(!user){
        throw new Error("No user found")
    }
    req.user = user;
    next()
  } catch (error) {
    res.status(500).send("Error" +" " + error.message)
  }
}

module.exports = { userCheckMiddleware };
