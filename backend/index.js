const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.listen(8800, () => {
  console.log("Backend server is running!");
});