function oddEvenSum(num) {
  let numToString = String(num);
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < numToString.length; i++) {
    let curr = Number(numToString[i]);
    if (curr % 2 === 0) {
      evenSum += curr;
    } else oddSum += curr;
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(3495892137259234);
