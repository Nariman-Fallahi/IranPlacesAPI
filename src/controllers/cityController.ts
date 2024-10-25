import { Request, Response } from "express";
import { findByProperty } from "../utils/findByProperty.js";
import { citiesData, provinceData } from "../data/data.js";

// getAllCity
export const getAllCity = (req: Request, res: Response) => {
  res.status(200).json(citiesData);
};

// getCityById
export const getCityById = (req: Request, res: Response) => {
  const cityId = req.params.id;

  const province = findByProperty(citiesData, "id", Number(cityId));

  if (!province) {
    res.status(404).json({ error: "City not found" });
  }

  res.status(200).json(province);
};

// getCityByName
export const getCityByName = (req: Request, res: Response) => {
  const cityName = req.params.name;

  const city = findByProperty(citiesData, "name", cityName);

  if (!city) {
    res.status(404).json({ error: "City not found" });
  }

  res.status(200).json(city);
};

// getProvinceByCityId
export const getProvinceByCityId = (req: Request, res: Response) => {
  const cityId = req.params.id;

  const city = findByProperty(citiesData, "id", Number(cityId));
  const cityProvinceId = city?.province_id;

  const province = findByProperty(provinceData, "id", Number(cityProvinceId));

  if (!province) {
    res.status(404).json({ error: "Province not found for this city" });
  }

  res.status(200).json(province);
};
