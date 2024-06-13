// product.js
import { getParam } from "./utils.mjs";
import productDetails from "./productDetail.mjs";

const productId = getParam("product");

if (productId){
    productDetails(productId, ".product-detail");
    //console.log(productDetails);
}


