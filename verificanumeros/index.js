const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const number = parseFloat(numberInput.value);

    if (isNaN(number)) {
        result.textContent = "Por favor, digite um número válido.";
    } else if (number > 0) {
        result.textContent = "O número é positivo.";
    } else if (number < 0) {
        result.textContent = "O número é negativo.";
    } else {
        result.textContent = "O número é zero.";
    }
});
