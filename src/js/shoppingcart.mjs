import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export function shoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  const output = document.querySelector(".product-list");
  const cartFooter = document.querySelector(".cart-footer");
  const emptyCartMessage = document.querySelector(".empty-cart-message");
  const cartTotalAmount = document.getElementById("cart-total-amount");

  renderListWithTemplate(cartItemTemplate, output, cartItems);
  if (cartItems && cartItems.length > 0) {
    renderListWithTemplate(cartItemTemplate, output, cartItems);
    cartFooter.classList.remove("hide");
    emptyCartMessage.classList.add("hide");

    // Calculate the total
    const total = cartItems.reduce((acc, item) => acc + item.FinalPrice, 0).toFixed(2);
    
    // Update the cart total element
    cartTotalAmount.textContent = total;
  } else {
    cartFooter.classList.add("hide");
    emptyCartMessage.classList.remove("hide");
  }
}

  function cartItemTemplate(item) {
    const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
  
    return newItem;
  }
