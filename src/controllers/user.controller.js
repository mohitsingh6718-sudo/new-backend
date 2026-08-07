import { response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUsers = asyncHandler(async (req, res) => {
  response.status.json({
    message: "ok",
  });
});

export default registerUsers;
