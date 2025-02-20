const express = require("express");
const app = express();
var cors = require("cors");
const bcrypt = require("bcrypt");
const validator = require("validator");

const { connectToDatabase } = require("./config/database");
const User = require("./models/userModel");

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
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
    res.status(200).send("Account created");
  } catch (error) {
    res.status(500).send("Error" + " " + error.message);
  }
});

connectToDatabase()
  .then(() => {
    console.log("connection Made");
    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
