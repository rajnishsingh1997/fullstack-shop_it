const express = require("express");
const validator = require("validator");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authRoute = express.Router();

authRoute.post("/signup", async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;
  try {
    const isPasswordStrong = validator.isStrongPassword(password);
    if (!isPasswordStrong) {
      return res.status(400).send("Please select a strong password");
    }
    const doesUserExist = await User.findOne({ emailId: emailId });
    if (doesUserExist) {
      return res.status(400).send("Email already in use");
    }

    const securePassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: securePassword,
    });
    await user.save();
    res.status(200).json({
      user,
      message: "Account created",
    });
  } catch (error) {
    res.status(500).json({
      data: error.message,
      message: "Failed",
    });
  }
});

authRoute.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      return res.status(400).send("Please provide your login details");
    }

    const isValidEmailFormat = validator.isEmail(emailId);

    if (!isValidEmailFormat) {
      return res.status(400).send("Invalid Email Format");
    }

    const isUserPresent = await User.findOne({ emailId: emailId });
    if (!isUserPresent) {
      res.status(400).send("Invalid login details");
    } else {
      isPasswordValid = await bcrypt.compare(password, isUserPresent.password);
      if (!isPasswordValid) {
        return res.status(400).send("Invalid Login Details");
      }
      const token = jwt.sign(isUserPresent?.id, "Qwerty123*");
      res.cookie("authToken", token , { expires: new Date(Date.now() + 900000)});
      res.status(200).json({
        data: isUserPresent,
        message: "User can login now",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Something went wrong, please try again later" });
  }
});

authRoute.post("/logout", (req, res) => {
  res.cookie("authToken", null, { expires: new Date(Date.now()) });
  res.status(200).send("Logout successfull");
});

module.exports = authRoute;
