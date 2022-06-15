function calculator(a, b, operator) {
  let res;

  switch (operator) {
    case "multiply":
      res = (a, b) => a * b;
      break;
    case "divide":
      res = (a, b) => a / b;
      break;
    case "add":
      res = (a, b) => a + b;
      break;
    case "subtract":
      res = (a, b) => a - b;
      break;
  }
  console.log(res(a,b));
}

calculator(5, 5, "multiply");
