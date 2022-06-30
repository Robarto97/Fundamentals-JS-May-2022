function shoppingList(arr) {
  let list = arr.shift().split("!");
  let index = 0;
  let commandLine = arr[index++];

  while (commandLine !== "Go Shopping!") {
    commandLine = commandLine.split(" ");
    let command = commandLine[0];
    let item = commandLine[1];

    switch (command) {
      case "Urgent":
        if (!list.includes(item)) {
          list.unshift(item);
        }
        break;
      case "Unnecessary":
        if (list.includes(item)) {
          let i = list.indexOf(item);
          list.splice(i, 1);
        }
        break;
      case "Correct":
        let newItem = commandLine[2];
        if (list.includes(item)) {
          let i = list.indexOf(item);
          list[i] = newItem;
        }
        break;
      case "Rearrange":
        if (list.includes(item)) {
          let i = list.indexOf(item);
          list.push(list.splice(i, 1));
        }
        break;
    }

    commandLine = arr[index++];
  }
  console.log(list.join(", "));
}

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
