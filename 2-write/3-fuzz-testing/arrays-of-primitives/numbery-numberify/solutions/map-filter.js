export const mapFilter = (arr) => {
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const castToNumber = (entry) => Number(entry);

  const numbers = arr.map(castToNumber).filter(isNotNaN);

  return numbers;
};
