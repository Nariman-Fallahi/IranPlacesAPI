import { Request, Response } from "express";
import { findByProperty } from "../utils/findByProperty.js";
import { citiesData, provinceData } from "../data/data.js";

// getAllCity
export const getAllCity = (req: Request, res: Response) => {
  res.status(200).json(citiesData);
};

// getCity
export const getCity = (req: Request, res: Response) => {
  const { id, name } = req.params;

  let city;

  if (id) {
    city = findByProperty(citiesData, "id", Number(id));
  } else if (name) {
    city = findByProperty(citiesData, "name", name);
  }

  if (!city) {
    res.status(404).json({ error: "City not found" });
  }

  res.status(200).json(city);
};

// getProvinceByCity
export const getProvinceByCity = (req: Request, res: Response) => {
  const { id, name } = req.params;

  let city;

  if (id) {
    city = findByProperty(citiesData, "id", Number(id));
  } else if (name) {
    city = findByProperty(citiesData, "name", name);
  }

  const cityProvinceId = city?.province_id;

  const province = findByProperty(provinceData, "id", Number(cityProvinceId));

  if (!province) {
    res.status(404).json({ error: "Province not found for this city" });
  }

  res.status(200).json(province);
};
