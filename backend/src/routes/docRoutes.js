import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { docMiddleware } from "../middleware/docMiddleware.js";
import { docUpload, fetchDocuments} from "../controllers/docController.js";
import { fileValidationMiddleware } from "../middleware/fileValidationMiddleware.js";

export const docRouter = express.Router();

docRouter.post(
  "/upload",
  authMiddleware,
  docMiddleware,
  fileValidationMiddleware,
  docUpload,
);

docRouter.get("/fetchDocuments", authMiddleware, fetchDocuments);
