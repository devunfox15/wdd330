import { convertToJson } from "./utils.mjs"; // Assuming you have a convertToJson function in utils.mjs

const baseURL = import.meta.env.VITE_SERVER_URL;


export async function getProductsByCategory(category = "tents") {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
}

export async function findProductById(id) {
  try {
    const response = await fetch(`${baseURL}product/${id}`);
    if (response.ok) {
      const product = await response.json();
      return product;
    } else {
      throw new Error("Product not found");
    }
  } catch (error) {
    throw new Error("Error fetching product:", error);
     // Return null or another appropriate value to indicate the error
  }
}


export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await fetch(baseURL + "checkout/", options).then(convertToJson);
}