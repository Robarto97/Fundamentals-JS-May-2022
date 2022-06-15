function signCheck(numOne, numTwo, numThree) {
  let negativeCount = 0;

  function numSign(num) {
    if (num < 0) {
      return negativeCount++;
    }
  }
  numSign(numOne);
  numSign(numTwo);
  numSign(numThree);

  if (negativeCount % 2 !== 0) {
    console.log("Negative");
  } else console.log("Positive");
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
