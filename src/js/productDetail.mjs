// productDetail.mjs
import { getLocalStorage, setLocalStorage, loadHeaderFooter} from "./utils.mjs";
import {findProductById } from "./externalServices.mjs";

loadHeaderFooter("../partials/header.html", "../partials/footer.html");

let product = {};

async function productDetails(productId) {
  const newProduct = await findProductById(productId);
  product = newProduct.Result;
  renderProductDetails();


    // Add listener to "Add to Cart" button
    document.getElementById("addToCart").addEventListener("click", addToCart);
  }


  function addToCart() {
    let cartContents = getLocalStorage("so-cart");
    console.log(cartContents);
    //check to see if there was anything there
    if (!cartContents) {
      cartContents = [];
    }
    // then add the current product to the list
    cartContents.push(product);
    setLocalStorage("so-cart", cartContents);
    console.log(cartContents);
  }

  function renderProductDetails() {
    document.getElementById("productName").textContent = product.Brand.Name;
    document.getElementById("productNameWithoutBrand").textContent = product.NameWithoutBrand;
    document.getElementById("productImage").src = product.Images.PrimaryMedium;
    document.getElementById("productImage").alt = product.Name;
    document.getElementById("productFinalPrice").textContent = `$${product.FinalPrice}`;
    document.getElementById("productColorName").textContent = capitalizeFirstLetter(product.Category);
    document.getElementById("productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;
  }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default productDetails;
export { addToCart };