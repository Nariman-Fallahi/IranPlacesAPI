export const findByProperty = <T extends { id?: number; name?: string }>(
  data: T[],
  property: keyof T,
  value: T[keyof T]
): T | undefined => {
  return data.find((item) => item[property] === value);
};
