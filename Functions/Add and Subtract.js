function addAndSubtract(a, b, c) {
  let sumFirstSecond = sum(a, b);
  console.log(subtract(sumFirstSecond, c));
  function sum(a, b) {
    return a + b;
  }
  function subtract(sum, c) {
    return sum - c;
  }
}

addAndSubtract(23, 6, 10);
