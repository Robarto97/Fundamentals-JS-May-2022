function evenOddSub(arr) {
  let oddSum = 0;
  let evenSum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else oddSum += num;
  }
  console.log(evenSum - oddSum);
}

evenOddSub([3,5,7,9]);
