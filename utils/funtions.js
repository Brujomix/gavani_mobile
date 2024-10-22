export const parseObjects = (product) => {
  try {
    const parsedData = JSON.parse(product);
    return parsedData
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
};
