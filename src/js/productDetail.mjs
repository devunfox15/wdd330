// productDetail.mjs
import { setLocalStorage, loadHeaderFooter} from "./utils.mjs";
import {findProductById } from "./externalServices.mjs";



loadHeaderFooter("../partials/header.html", "../partials/footer.html");

async function productDetails(productId, selector) {
  const elem = document.querySelector(selector);
  const product = await findProductById(productId);
  console.log(product);
  if (product) {
    document.getElementById("productName").textContent = product.Result.Brand.Name;
    document.getElementById("productNameWithoutBrand").textContent = product.Result.NameWithoutBrand;
    document.getElementById("productImage").src = product.Result.Images.PrimaryMedium;
    document.getElementById("productImage").alt = product.Name;
    document.getElementById("productFinalPrice").textContent = `$${product.Result.FinalPrice}`;
    document.getElementById("productColorName").textContent = product.Result.Category;
    document.getElementById("productDescriptionHtmlSimple").innerHTML = product.Result.DescriptionHtmlSimple;

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

export default productDetails;
export { addToCart };