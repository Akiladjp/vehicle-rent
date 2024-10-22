import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

import dotenv from 'dotenv';
dotenv.config();

const PORT = 3000;
const MONGOURL = "mongodb+srv://akilapiyumal11:akilapiyumal11@vehicle-hire.bvih3.mongodb.net/vehicle-hire?retryWrites=true&w=majority&appName=Vehicle-hire";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(__dirname, "../src/assets/cars");
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload endpoint
app.post("/uploadImage", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log(req.file);

  res.status(200).json({
    message: "File uploaded successfully",
    filePath: `${req.file.filename}`,
  });
});

// Start server
mongoose .connect(MONGOURL) .then(() => {
console.log("Connection Successfully");
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
})
.catch((error) => {
  console.log("Error in connect database", error);
})


//set API routes
app.use('/api', router);