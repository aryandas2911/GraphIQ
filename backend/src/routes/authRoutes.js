import express from "express";
import { login, me, signup } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

export const authRouter = express.Router();

authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.get("/me", authMiddleware, me);
