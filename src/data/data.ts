import { CitiesDataDataType, ProvinceDataType } from "../type";
import { loadJsonData } from "../utils/loadData.js";

export const provinceData = loadJsonData<ProvinceDataType[]>(
  "../data/provinces.json"
);
export const citiesData = loadJsonData<CitiesDataDataType[]>(
  "../data/cities.json"
);
