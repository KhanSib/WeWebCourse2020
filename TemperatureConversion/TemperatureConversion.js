function ready() {
    var calcButton = document.getElementById("calc-button");
    var fahrenheitTemp = document.getElementById("temperature-in-fahrenheit");
    var kelvinTemp = document.getElementById("temperature-in-kelvin");
    var errorMessage = document.getElementById("error-message");

    calcButton.addEventListener("click", function () {
        var temperature = document.getElementById("temperature").value;

        if (isNaN(parseFloat(temperature))) {
            errorMessage.textContent = "Пожалуйста введите вещественное число";
            return;
        }

        errorMessage.textContent = "";

        fahrenheitTemp.value = (parseFloat(temperature) * 9) / 5 + 32;
        kelvinTemp.value = parseFloat(temperature) + 273.15;
    })
}

document.addEventListener("DOMContentLoaded", ready);