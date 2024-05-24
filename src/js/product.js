// product.js
import { getParam } from "./utils.mjs";
import productDetails from "./productDetail.mjs";

const productId = getParam("product");
productDetails(productId);

