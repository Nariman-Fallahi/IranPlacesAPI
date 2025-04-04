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

// getCitiesByProvince
export const getCitiesByProvince = (req: Request, res: Response) => {
  const { id, name } = req.params;

  let provinceId: number | undefined;

  if (id) {
    provinceId = Number(id);
  } else if (name) {
    const province = findByProperty(provinceData, "name", name);
    if (province) {
      provinceId = province.id;
    }
  }

  if (!provinceId) {
    res.status(404).json({ error: "Province not found" });
  }

  const cities = citiesData.filter((item) => item.province_id === provinceId);

  if (cities.length === 0) {
    res.status(404).json({ error: "No cities found for this province" });
  }

  res.status(200).json(cities);
};
