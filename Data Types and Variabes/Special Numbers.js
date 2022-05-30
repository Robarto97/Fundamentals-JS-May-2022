function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let iToString = String(i);
    for (let j = 0; j < iToString.length; j++) {
      sum += Number(iToString[j]);
    }
    console.log(
      `${i} -> ${sum === 5 || sum === 7 || sum === 11 ? "True" : "False"}`
    );
  }
}

specialNumbers(15);
