import productList from "../js/productList.mjs";
import { loadHeaderFooter, getParam } from "../js/utils.mjs";

loadHeaderFooter("../partials/header.html", "../partials/footer.html");

// Retrieve the category parameter from the URL
const category = getParam("category");

// Pass the category parameter to the productList function
productList(".product-list", category);

// Capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// eslint-disable-next-line no-shadow
function updateTitle(category) {
    const titleElement = document.querySelector(".title");
    if (titleElement) {
        titleElement.textContent = capitalizeFirstLetter(category);
    }
}
if (category) {
    updateTitle(category);
}
