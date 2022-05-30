function amazingNum(num) {
  let numToString = String(num);
  let sum = 0;
  for (let i = 0; i < numToString.length; i++) {
    sum += Number(numToString[i]);
  }
  let result = String(sum).includes("9");
  console.log(`${num} Amazing? ${result ? "True" : "False"}`);
}

amazingNum(999);
