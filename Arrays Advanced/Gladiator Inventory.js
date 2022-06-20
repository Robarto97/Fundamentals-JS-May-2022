function gladiatorInventory(arr) {
  let items = arr.shift().split(" ");
  
  for (let i = 0; i < arr.length; i++) {
    let currLine = arr[i].split(" ");
    let command = currLine[0];
    let item = currLine[1];

    switch (command) {
      case "Buy":
        if (!items.includes(item)) {
          items.push(item);
        }
        break;
      case "Trash":
        if (items.includes(item)) {
          let index = items.indexOf(item);
          items.splice(index, 1);
        }
        break;
      case "Repair":
        if (items.includes(item)) {
          let index = items.indexOf(item);
          items.splice(index, 1);
          items.push(item);
        }
        break;
      case "Upgrade":
        let upgradeItem = item.split("-");
        if (items.includes(upgradeItem[0])) {
          let index = items.indexOf(upgradeItem[0]);
          items.splice(index+1, 0, upgradeItem.join(":"));
        }
        break;
    }
  }
  console.log(items.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);
