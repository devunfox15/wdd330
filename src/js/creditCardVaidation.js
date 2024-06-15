/* this was not working how the API expected */
/* document.addEventListener("DOMContentLoaded", function () {
    const creditCardInput = document.getElementById("cardNumber");

    creditCardInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
        let formattedValue = "";

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += "-";
            }
            formattedValue += value[i];
        }

        e.target.value = formattedValue;
    });
}); */