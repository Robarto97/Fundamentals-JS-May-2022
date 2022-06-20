function arrayMansipulator(arrNum, arrStr) {
  for (let i = 0; i < arrStr.length; i++) {
    let currLine = arrStr[i].split(" ");
    let currCommand = currLine.shift();
    currLine = currLine.map(Number);
    let sumPairs = 0;
    let sumPairsArr = [];

    switch (currCommand) {
      case "add":
        arrNum.splice(currLine[0], 0, currLine[1]);
        break;
      case "addMany":
        arrNum.splice(currLine.shift(), 0, [...currLine].join(", "));
        break;
      case "contains":
        console.log(arrNum.indexOf(currLine[0]));
        break;
      case "remove":
        arrNum.splice(currLine[0], 1);
        break;
      case "shift":
        for (let i = 0; i < currLine[0]; i++) {
          arrNum.push(arrNum.shift());
        }
        break;
      case "sumPairs":
        if (arrNum.length % 2 !== 0) {
          arrNum.push(0);
        }
        for (let i = 0; i < arrNum.length; i += 2) {
          sumPairs = 0;
          sumPairs += arrNum[i] + arrNum[i + 1];
          sumPairsArr.push(sumPairs);
        }
        arrNum = [...sumPairsArr];
        break;
      case "print":
        console.log(`[ ${arrNum.join(", ")} ]`);
        break;
    }
  }
}

arrayMansipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
