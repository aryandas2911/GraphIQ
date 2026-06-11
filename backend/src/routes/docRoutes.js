import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { docMiddleware } from "../middleware/docMiddleware.js";
import { docUpload } from "../controllers/docController.js";
import { fileValidationMiddleware } from "../middleware/fileValidationMiddleware.js";

export const docRouter = express.Router();

docRouter.post(
  "/upload",
  authMiddleware,
  docMiddleware,
  fileValidationMiddleware,
  docUpload,
);
