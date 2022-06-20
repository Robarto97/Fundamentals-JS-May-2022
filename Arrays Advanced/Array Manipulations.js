function arrayMans(arr) {
  let numArr = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    let commandArr = arr[i].split(" ");
    let command = commandArr[0];
    let num = Number(commandArr[1]);
    let index = Number(commandArr[2]);

    switch (command) {
      case "Add":
        numArr.push(num);
        break;
      case "Remove":
        numArr = numArr.filter((el) => el !== num);
        break;
      case "RemoveAt":
        numArr.splice(num, 1);
        break;
      case "Insert":
        numArr.splice(index, 0, num);
        break;
    }
  }

  console.log(numArr.join(" "));
}

arrayMans(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
