import express from "express";
import {
  getPlacesByIdController,
  getPlacesController,
  placeController,
  updatePlaceController,
} from "../Controllers/placeController.js";
const router = express.Router();

// place route

router.post("/places", placeController);
router.get("/places", getPlacesController);
router.put("/places", updatePlaceController);
router.get("/places/:id", getPlacesByIdController);

export default router;
