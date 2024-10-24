export const findById = <T extends { id: number }>(
  data: T[],
  id: number
): T | undefined => {
  return data.find((item) => item.id === id);
};