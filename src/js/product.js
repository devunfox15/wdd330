// product.js
import { getParam } from "./utils.mjs";
import productDetails, { addToCart } from "./productDetail.mjs";

const productId = getParam("product");
productDetails(productId);

// Add to Cart button event handler
document.getElementById("addToCart").addEventListener("click", addToCart);
