import express from "express";
const router = express.Router();

import { getAllCity, getCity } from "../controllers/cityController";

router.get("/", getAllCity);
router.get("/:id", getCity);

export default router;
