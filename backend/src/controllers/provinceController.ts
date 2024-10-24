import { Request, Response } from "express";
import { loadJsonData } from "../utils/loadData";
import { findById } from "../utils/findById";
import { CitiesDataDataType } from "./cityController";

type ProvinceDataType = {
  id: number;
  name: string;
  slug: string;
  tel_prefix: string;
};

// getAllProvinces
const provinceData = loadJsonData<ProvinceDataType[]>("../data/provinces.json");
const citiesData = loadJsonData<CitiesDataDataType[]>("../data/cities.json");

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

  const citys = citiesData.filter(
    (item) => item.province_id === Number(provinceId)
  );

  res.json(citys);
};
