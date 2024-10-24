export type ProvinceDataType = {
  id: number;
  name: string;
  slug: string;
  tel_prefix: string;
};

export type CitiesDataDataType = {
  id: number;
  name: string;
  slug: string;
  province_id: number;
};
