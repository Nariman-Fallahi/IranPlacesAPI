import { Request, Response } from "express";
import { findByProperty } from "../utils/findByProperty.js";
import { citiesData, provinceData } from "../data/data.js";

// getAllProvinces
export const getAllProvinces = (req: Request, res: Response) => {
  res.status(200).json(provinceData);
};

// getProvince
export const getProvince = (req: Request, res: Response) => {
  const { id, name } = req.params;

  let province;

  if (id) {
    province = findByProperty(provinceData, "id", Number(id));
  } else if (name) {
    province = findByProperty(provinceData, "name", name);
  }

  if (!province) {
    res.status(404).json({ error: "Province not found" });
  }

  res.status(200).json(province);
};

export const getCitiesByProvince = (req: Request, res: Response) => {
  const { id, name } = req.params;

  let cities;

  if (id) {
    cities = citiesData.filter((item) => item.province_id === Number(id));
  } else if (name) {
    cities = citiesData.filter((item) => item.name === name);
  }

  if (cities && cities.length === 0) {
    res.status(404).json({ error: "No cities found for this province" });
  }

  res.status(200).json(cities);
};
