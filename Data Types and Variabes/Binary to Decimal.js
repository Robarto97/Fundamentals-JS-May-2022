function binaryToDecimal(num) {
  let sum = 0;
  let j = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    let currNum = Number(num[i]);
    if (currNum === 1) {
      sum += Math.pow(2, j);
    }

    j++;
  }
  console.log(sum);
}

binaryToDecimal("11110000");
