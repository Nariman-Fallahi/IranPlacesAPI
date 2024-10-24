import express from "express";
const router = express.Router();

import {
  getAllProvinces,
  getCitiesByProvinceId,
  getProvince,
} from "../controllers/provinceController";

router.get("/", getAllProvinces);
router.get("/:id", getProvince);
router.get("/:id/cities", getCitiesByProvinceId);

export default router;
