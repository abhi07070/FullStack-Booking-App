import express from "express";
import { placeController } from "../Controllers/placeController.js";
const router = express.Router();

// place route

router.post("/places", placeController);

export default router;
