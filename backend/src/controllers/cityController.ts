import { Request, Response } from "express";
import { findById } from "../utils/findById";
import { citiesData, provinceData } from "../data/data";

// getAllCity
export const getAllCity = (req: Request, res: Response) => {
  res.json(citiesData);
};

// getCity
export const getCity = (req: Request, res: Response) => {
  const cityId = req.params.id;

  if (!cityId) {
    res.status(400).json({ error: "City ID is required" });
  }

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

  const cities = findById(provinceData, Number(cityProvinceId));

  res.json(cities);
};
