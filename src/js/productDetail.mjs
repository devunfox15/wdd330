import { findProductById } from "./externalServices.mjs";
import { setLocalStorage, loadHeaderFooter } from "./utils.mjs";

let currentProduct = {};

loadHeaderFooter("../partials/productHeader.html", "../partials/footer.html");

function renderProductDetails() {
  // Render product details in HTML
  const productContainer = document.getElementById("product-details");

  // Example rendering of product details
  productContainer.innerHTML = `
    <div>
      <h2>${currentProduct.name}</h2>
      <p>${currentProduct.description}</p>
      <p>Price: $${currentProduct.price}</p>
      <button id="addToCart" data-id="${currentProduct.id}">Add to Cart</button>
    </div>
  `;
}

async function productDetails(productId) {
  // Find product by id
  currentProduct = await findProductById(productId);
  if (currentProduct) {
    renderProductDetails();
  } else {
    console.error("Product not found.");
  }
}

function addToCart() {
  // Function to add product to cart
  setLocalStorage("so-cart", currentProduct);
}

export default productDetails;
export { addToCart };
