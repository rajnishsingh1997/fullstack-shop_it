const express = require("express");
const app = express();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectToDatabase } = require("./config/database");
const authRouter = require("./routes/auth");
const productAuth = require("./routes/product");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/", authRouter);
app.use("/", productAuth);

connectToDatabase()
  .then(() => {
    console.log("connection Made");
    app.listen(4000, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
