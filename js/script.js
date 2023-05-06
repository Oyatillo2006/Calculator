const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("operator")) {
      firstOperand = parseFloat(display.textContent);
      operator = button.textContent;
      display.textContent = "0";
    } else if (button.classList.contains("number")) {
      if (display.textContent === "0" && !display.textContent.includes(".")) {
        display.textContent = button.textContent;
      } else if (display.textContent.includes(".") && button.textContent === ".") {
        // Do nothing
      } else {
        display.textContent += button.textContent;
      }
    } else if (button.classList.contains("equal")) {
      secondOperand = parseFloat(display.textContent);
      switch (operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
        default:
          result = null;
      }
      display.textContent = result.toString();
      firstOperand = result;
      operator = null;
      secondOperand = null;
    } else if (button.classList.contains("operator") && button.textContent === "C") {
      display.textContent = "0";
      firstOperand = null;
      operator = null;
      secondOperand = null;
      result = null;
    }
  });
});
