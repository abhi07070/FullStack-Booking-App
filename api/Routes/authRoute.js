import express from "express";
import {
  loginController,
  profileController,
  registerController,
} from "../Controllers/authController.js";

const router = express.Router();

// register
router.post("/register", registerController);

// login
router.post("/login", loginController);

//profile
router.get("/profile", profileController);

export default router;
