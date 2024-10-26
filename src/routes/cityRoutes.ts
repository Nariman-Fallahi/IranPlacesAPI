import express from "express";
const router = express.Router();

import {
  getAllCity,
  getCity,
  getProvinceByCity,
} from "../controllers/cityController.js";

router.get("/", getAllCity);
router.get("/id/:id", getCity);
router.get("/name/:name", getCity);
router.get("/id/:id/province", getProvinceByCity);
router.get("/name/:name/province", getProvinceByCity);

export default router;
