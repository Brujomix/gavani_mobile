export const parseObjects = (product) => {
  try {
    const parsedData = JSON.parse(product);
    return parsedData
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
};

export const Total_Cart = (array)=>{
  let total = 0;
  if (array.length !== 0) {
    for (const obj of array) {
      const precio = obj.pro_precio;
      const cantidad = obj.Cantidad;
      total += precio * cantidad;
    }
  }
  return total;
}
