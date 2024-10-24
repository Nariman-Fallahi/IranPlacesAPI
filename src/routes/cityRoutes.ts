import express from "express";
const router = express.Router();

import {
  getAllCity,
  getCity,
  getProvinceByCityId,
} from "../controllers/cityController.js";

router.get("/", getAllCity);
router.get("/:id", getCity);
router.get("/:id/province", getProvinceByCityId);

export default router;
