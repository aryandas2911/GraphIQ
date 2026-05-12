import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRoutes.js";
import cors from "cors";
import { docRouter } from "./routes/docRoutes.js";

const app = express();
dotenv.config();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRouter);
app.use("/api/documents", docRouter);

app.listen(PORT, () => {
  console.log(`Backend on http://localhost:${PORT}`);
});
