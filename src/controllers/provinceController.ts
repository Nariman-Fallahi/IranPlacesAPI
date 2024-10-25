import { Request, Response } from "express";
import { findByProperty } from "../utils/findByProperty.js";
import { citiesData, provinceData } from "../data/data.js";

// getAllProvinces
export const getAllProvinces = (req: Request, res: Response) => {
  res.status(200).json(provinceData);
};

// getProvinceById
export const getProvinceById = (req: Request, res: Response) => {
  const provinceId = req.params.id;

  const province = findByProperty(provinceData, "id", Number(provinceId));

  if (!province) {
    res.status(404).json({ error: "Province not found" });
  }

  res.status(200).json(province);
};

// getProvinceByName
export const getProvinceByName = (req: Request, res: Response) => {
  const provinceName = req.params.name;

  const province = findByProperty(provinceData, "name", provinceName);

  if (!province) {
    res.status(404).json({ error: "Province not found" });
  }

  res.status(200).json(province);
};

//getCitiesByProvinceId
export const getCitiesByProvinceId = (req: Request, res: Response) => {
  const provinceId = req.params.id;

  const cities = citiesData.filter(
    (item) => item.province_id === Number(provinceId)
  );

  if (cities.length === 0) {
    res.status(404).json({ error: "No cities found for this province" });
  }

  res.status(200).json(cities);
};
