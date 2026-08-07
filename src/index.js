// // require("dotenv").config({ path: "./env" });
// import dotenv from "dotenv";
// import connectDB from "./db/index.js";
// import express from "express";

// const app = express();
// dotenv.config({ path: ".env" });
// connectDB()
//   //   .then(() => {
//   //     app.listen(process.env.PORT || 5000, () => {
//   //       console.log(`Server is runing at port: ${process.env.PORT}`);
//   //     });
//   //   })
//   //   .catch((errr) => {
//   //     console.log("MONGO dv connection failed !!!!!!", errr);
//   //   })
//   .then(() => {
//     console.log("MongoDB Connected Successfully");

//     app.on("error", (error) => {
//       console.log("Express Error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT || 5000, () => {
//       console.log(`Server is running at port: ${process.env.PORT || 5000}`);
//     });
//   })
//   .catch((error) => {
//     console.log("MongoDB connection failed:", error);
//     throw error;
//   });
// /*
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import express from "express";
// const app = express();

// dotenv.config({
//   path: "./.env",
// });
// // function connectDB() {}
// // connectDB();

// // IIFE=Immediately Invoked Function Expression
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}`);
//     console.log("mongodb connected");
//     app.on("error", (error) => {
//       console.log("ERRRR");
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listenign onport ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR:", error);
//     throw error;
//   }
// })();
// */
// console.log("Program started");
// console.log(process.env.PORT);
// console.log(process.env.MONGODB_URI);

// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/
