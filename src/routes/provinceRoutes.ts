import express from "express";
const router = express.Router();

import {
  getAllProvinces,
  getCitiesByProvince,
  getProvince,
} from "../controllers/provinceController.js";

router.get("/", getAllProvinces);
router.get("/id/:id", getProvince);
router.get("/name/:name", getProvince);
router.get("/id/:id/cities", getCitiesByProvince);
router.get("/name/:name/cities");

export default router;
