// productDetail.mjs
import { setLocalStorage, loadHeaderFooter} from "./utils.mjs";
import {findProductById } from "./externalServices.mjs";



loadHeaderFooter("../partials/header.html", "../partials/footer.html");

async function productDetails(productId, selector) {
  const elem = document.querySelector(selector);
  const currentProduct = await findProductById(productId);
  const product = currentProduct.Result;
  console.log(product);
  if (product) {
    document.getElementById("productName").textContent = product.Brand.Name;
    document.getElementById("productNameWithoutBrand").textContent = product.NameWithoutBrand;
    document.getElementById("productImage").src = product.Images.PrimaryMedium;
    document.getElementById("productImage").alt = product.Name;
    document.getElementById("productFinalPrice").textContent = `$${product.FinalPrice}`;
    document.getElementById("productColorName").textContent = capitalizeFirstLetter(product.Category);
    document.getElementById("productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;

    // Add listener to "Add to Cart" button
    const addToCartButton = document.getElementById("addToCart");
    addToCartButton.dataset.id = product.Id;
    addToCartButton.addEventListener("click", () => {
      addToCart(product);
    });
  } else {
    elem.innerHTML = "Product not found.";
  }
}

function addToCart(product) {
  // Function to add product to cart
  setLocalStorage("so-cart", product);
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default productDetails;
export { addToCart };