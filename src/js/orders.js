import { loadHeaderFooter } from "./utils.mjs";
import { currentOrders } from "./currentOrders.mjs";

loadHeaderFooter("../../partials/ordersHeader.html", "../../partials/footer.html");

currentOrders();