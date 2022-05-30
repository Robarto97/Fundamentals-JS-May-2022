function biggestOf3Nums(a, b, c) {
  let max = Number.MIN_SAFE_INTEGER;

  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else max = c;
  console.log(max);
}

biggestOf3Nums(130, 5, 99);
