function sumOddNums(n) {
  let num = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += num;
    console.log(num);
    num += 2;
  }
  console.log(`Sum: ${sum}`);
}

sumOddNums(5);
