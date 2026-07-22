// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: ".env" });
connectDB();
console.log("Program started");
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);

/*
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config({
  path: "./.env",
});
// function connectDB() {}
// connectDB();

// IIFE=Immediately Invoked Function Expression
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("mongodb connected");
    app.on("error", (error) => {
      console.log("ERRRR");
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listenign onport ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
*/
