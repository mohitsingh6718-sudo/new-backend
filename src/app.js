import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origion: process.env.CORS_ORIGIN,
    credentials: true, //cookies permission
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //forms
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

// routes declearation
// app.get
app.use("api/v1/users", userRouter);

export { app };

// Middleware request ko
// check kar sakta hai
// modify kar sakta hai
// reject kar sakta hai
// data add kar sakta hai
// Fir next middleware ko bhej deta hai.
