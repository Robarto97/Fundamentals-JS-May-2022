function inventory(arr) {
  let items = arr.shift().split(", ");
  let index = 0;
  let commandLine = arr[index++];

  while (commandLine !== "Craft!") {
    let commandArr = commandLine.split(" - ");
    let command = commandArr[0];
    let item = commandArr[1];

    switch (command) {
      case "Collect":
        if (!items.includes(item)) {
          items.push(item);
        }
        break;
      case "Drop":
        if (items.includes(item)) {
          let i = items.indexOf(item);
          items.splice(i, 1);
        }
        break;
      case "Combine Items":
        item = item.split(":");
        if (items.includes(item[0])) {
          let i = items.indexOf(item[0]);
          items.splice(i + 1, 0, item[1]);
        }
        break;
      case "Renew":
        if (items.includes(item)) {
          let i = items.indexOf(item);
          items.push(items.splice(i, 1));
        }
        break;
    }

    commandLine = arr[index++];
  }
  console.log(items.join(", "));
}

inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
