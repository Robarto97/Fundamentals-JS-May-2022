function factorialDivision(num1, num2) {
  let multiSum1 = 1;
  let multiSum2 = 1;
  for (let i = num1; i > 0; i--) {
    multiSum1 *= i;
  }
  for (let i = num2; i > 0; i--) {
    multiSum2 *= i;
  }
  let final = multiSum1 / multiSum2;
  console.log(final.toFixed(2));
}
factorialDivision(6, 2);
