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

app.post("/login", async (req, res) => {
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
      res.status(200).send("Logged in now");
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong, please try again later" });
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
