import { Request, Response } from "express";
import { findById } from "../utils/findById.js";
import { citiesData, provinceData } from "../data/data.js";

// getAllCity
export const getAllCity = (req: Request, res: Response) => {
  res.json(citiesData);
};

// getCity
export const getCity = (req: Request, res: Response) => {
  const cityId = req.params.id;

  const province = findById(citiesData, Number(cityId));

  if (!province) {
    res.status(404).json({ error: "City not found" });
  }

  res.json(province);
};

// getProvinceByCityId
export const getProvinceByCityId = (req: Request, res: Response) => {
  const cityId = req.params.id;

  const city = findById(citiesData, Number(cityId));
  const cityProvinceId = city?.province_id;

  const province = findById(provinceData, Number(cityProvinceId));

  if (!province) {
    res.status(404).json({ error: "Province not found for this city" });
  }

  res.json(province);
};
