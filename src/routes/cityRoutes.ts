import express from "express";
const router = express.Router();

import {
  getAllCity,
  getCityById,
  getProvinceByCityId,
  getCityByName
} from "../controllers/cityController.js";

router.get("/", getAllCity);
router.get("/id/:id", getCityById);
router.get("/name/:name", getCityByName);
router.get("/id/:id/province", getProvinceByCityId);

export default router;
