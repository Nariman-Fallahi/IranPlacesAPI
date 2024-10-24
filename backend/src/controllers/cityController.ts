import { Request, Response } from "express";
import { loadJsonData } from "../utils/loadData";
import { findById } from "../utils/findById";

export type CitiesDataDataType = {
  id: number;
  name: string;
  slug: string;
  province_id: number;
};

const citiesData = loadJsonData<CitiesDataDataType[]>("../data/cities.json");

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