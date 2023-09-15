function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      return num1 / num2;
  }

  // if (operator === '+') return num1 + num2;
  // else if (operator === '-') return num1 - num2;
  // else if (operator === '*') return num1 * num2;
  // else (operator === "/") return num1 / num2;
}

module.exports = calculator;
