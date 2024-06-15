import { loadHeaderFooter } from "./utils.mjs";
import {checkoutProcess} from "./checkoutProcess.mjs";

loadHeaderFooter("../../partials/checkoutHeader.html", "../../partials/footer.html");


checkoutProcess.init("so-cart", ".checkout-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

// this is how it would look if we listen for the submit on the form
document.forms["checkout-form"].addEventListener("submit", (e) => {
  e.preventDefault();
  var myForm = document.forms[0];
  var chK_status = myForm.checkValidity();
  myForm.reportValidity();
  console.log("Submit pressed!")
  if (chK_status) {
    console.log(chK_status)
  // e.target would contain our form in this case
  checkoutProcess.checkout(e.target);
  }
});