export const formated_Date = () => {
  const date = new Date();
  const isoDate = date.toISOString();
  const splitDate = isoDate.split("T");

  return splitDate[0];
};
