import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { docMiddleware } from "../middleware/docMiddleware.js";
import {
  deleteDocument,
  docUpload,
  fetchDocuments,
  fetchDocumentsById,
  processDocument,
} from "../controllers/docController.js";
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
docRouter.get("/fetchDocuments/:id", authMiddleware, fetchDocumentsById);
docRouter.delete("/fetchDocuments/:id", authMiddleware, deleteDocument);
docRouter.post("/fetchDocuments/:id/process", authMiddleware, processDocument);
