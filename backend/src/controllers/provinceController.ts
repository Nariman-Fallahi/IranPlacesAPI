import { Request, Response } from "express";
import { findById } from "../utils/findById";
import { citiesData, provinceData } from "../data/data";

// getAllProvinces
export const getAllProvinces = (req: Request, res: Response) => {
  res.json(provinceData);
};

// getProvince
export const getProvince = (req: Request, res: Response) => {
  const provinceId = req.params.id;

  const province = findById(provinceData, Number(provinceId));

  if (!province) {
    res.status(404).json({ error: "Province not found" });
  }

  res.json(province);
};

//getCitiesByProvinceId
export const getCitiesByProvinceId = (req: Request, res: Response) => {
  const provinceId = req.params.id;

  const cities = citiesData.filter(
    (item) => item.province_id === Number(provinceId)
  );

  if (!cities) {
    res.status(404).json({ error: "No cities found for this province" });
  }

  res.json(cities);
};
