const allowedMimeTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_SIZE = 50 * 1024 * 1024;

export const fileValidationMiddleware = (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!allowedMimeTypes.includes(req.file.mimetype)) {
      return res
        .status(400)
        .json({ message: "Invalid file type. Only PDF and DOCX allowed" });
    }

    if (req.file.size > MAX_SIZE) {
      return res
        .status(400)
        .json({ message: "File too large. Max 50MB allowed" });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: "File validation failed",
      error: error.message,
    });
  }
};
