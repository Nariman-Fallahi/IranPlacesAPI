import express from "express";
const router = express.Router();

import {
  getAllProvinces,
  getCitiesByProvinceId,
  getProvinceById,
  getProvinceByName,
} from "../controllers/provinceController.js";

router.get("/", getAllProvinces);
router.get("/id/:id", getProvinceById);
router.get("/name/:name", getProvinceByName);
router.get("/id/:id/cities", getCitiesByProvinceId);

export default router;
