function numbers(arr) {
  let numsArr = arr.shift().split(" ").map(Number);
  let commandLine = arr.shift();

  while (commandLine !== "Finish") {
    commandLine = commandLine.split(" ");

    let operator = commandLine[0];
    let num = Number(commandLine[1]);

    switch (operator) {
      case "Add":
        numsArr.push(num);
        break;
      case "Remove":
        if (numsArr.includes(num)) {
          let index = numsArr.indexOf(num);
          numsArr.splice(index, 1);
        }
        break;
      case "Replace":
        let newNum = Number(commandLine[2]);
        if (numsArr.includes(num)) {
          let index = numsArr.indexOf(num);
          numsArr.splice(index, 1, newNum);
        }
        break;
      case "Collapse":
        numsArr = numsArr.filter((x) => x >= num);
        break;
    }
    commandLine = arr.shift();
  }
  console.log(numsArr.join(" "));
}

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
