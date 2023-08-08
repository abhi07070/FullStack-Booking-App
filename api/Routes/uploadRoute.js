import express from "express";
import { uploadByLinkController } from "../Controllers/uploadController.js";

const router = express.Router();

// upload pic by link

router.post("/upload-by-link", uploadByLinkController);

export default router;
