function numberMod(num) {
  let numToString = String(num);
  let sum = 0;
  let arrL = numToString.length;
  for (let i = 0; i < arrL; i++) {
    let currDigit = Number(numToString[i]);
    sum += currDigit;
  }
  let avg = sum / arrL;
  if (avg <= 5) {
    numToString += 9;
    numberMod(numToString);
  } else {
    console.log(numToString);
  }
}

numberMod(101);
numberMod(5835);
