// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: ".env" });

/*
import express from "express";
const app = express();
function connectDB() {}
connectDB();

// IIFE=Immediately Invoked Function Expression
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
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
connectDB();
console.log("Program started");
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);
