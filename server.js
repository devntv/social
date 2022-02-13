// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import mongoose from "mongoose";
// import router from "./routes/authRouter.js";
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// app.get("/", (req, res) => {
//   res.json({ msg: "hello" });
// });

// routes from authRoute
app.use("/api", require("./routes/authRouter"));

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected mongoDB");
  }
);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server starting on port", port);
});
