import { loadHeaderFooter } from "./utils.mjs";
import {checkoutProcess} from "./checkoutProcess.mjs";

loadHeaderFooter("../../partials/checkoutHeader.html", "../../partials/footer.html");


document
  .querySelector("#customerZip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

// this is how it would look if we listen for the submit on the form
document.forms["checkout-form"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  checkoutProcess.checkout(e.target);
});