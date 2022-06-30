function muOnline(str) {
  let health = 100;
  let bitcoins = 0;
  let arr = str.split("|");
  let index = 0;
  let commandLine = arr[index++];
  let counter = 1;
  let isGameOver = false;

  while (index <= arr.length) {
    commandLine = commandLine.split(" ");
    let command = commandLine[0];
    let number = Number(commandLine[1]);
    switch (command) {
      case "potion":
        if (health + number > 100) {
          number = 100 - health;
          health = 100;
        } else {
          health += number;
        }
        console.log(`You healed for ${number} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        bitcoins += number;
        console.log(`You found ${number} bitcoins.`);
        break;
      default:
        health -= number;
        if (health <= 0) {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${counter}`);
          isGameOver = true;
        } else {
          console.log(`You slayed ${command}.`);
        }
        break;
    }
    if (isGameOver) {
      break;
    }
    counter++;
    commandLine = arr[index++];
  }
  if (!isGameOver) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
