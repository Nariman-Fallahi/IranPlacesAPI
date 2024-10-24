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

  if (!provinceId) {
    res.status(400).json({ error: "Province ID is required" });
  }

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

  res.json(cities);
};
