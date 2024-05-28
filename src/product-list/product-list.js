import productList from "../js/productList.mjs";
import { loadHeaderFooter } from "../js/utils.mjs";

loadHeaderFooter("../partials/header.html", "../partials/footer.html");

productList(".product-list", "tents");
