import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { docUpload } from "../controllers/docController.js";

export const docRouter = express.Router();

docRouter.post("/upload", authMiddleware, docUpload);
