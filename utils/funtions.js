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
  return total.toLocaleString("de-DE");
}

export const TotalProductCart = (array) =>{
  let total = 0
  for (const obj of array) {
    total += obj.Cantidad
  }
  return total;
}

export const TotalPriceQuantity = (objProduct) =>{
 
  const {Cantidad, pro_precio} = objProduct
  const Total = Cantidad * pro_precio

  return Total.toLocaleString("de-DE");
}

