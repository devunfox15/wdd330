import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Image}"
        alt="Image of ${product.Name}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p></a>
    </li>`;
  }  

async function productList(selector, category) {
    // get the element we will insert the list into from the selector
    const elem = document.querySelector(selector);
    // get the list of products 
    const products = await getData(category);
    // filter out the two unuseed tents
    const newProducts = products.filter(item => item.Id !== "989CG" && item.Id !== "880RT") 
    console.log(newProducts);
    // render out the product list to the element
    renderListWithTemplate(productCardTemplate, elem, newProducts);
    
}

export default productList;