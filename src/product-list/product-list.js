import productList from "../js/productList.mjs";
import { loadHeaderFooter, getParam } from "../js/utils.mjs";

loadHeaderFooter("../partials/header.html", "../partials/footer.html");

// Retrieve the category parameter from the URL
const category = getParam("category");

// Pass the category parameter to the productList function
productList(".product-list", category);
