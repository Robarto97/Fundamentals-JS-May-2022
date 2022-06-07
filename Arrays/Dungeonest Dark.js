function dungeonestDark(arr) {
  let splitArr = arr[0].split("|");
  let coins = 0;
  let health = 100;
  let roomCount = 0;
  let isAlive = true;

  for (let i = 0; i < splitArr.length; i++) {
    let room = splitArr[i].split(" ");
    let type = room[0];
    let number = Number(room[1]);
    roomCount++;

    if (type === "potion") {
      if (health + number > 100) {
        number = 100 - health;
        health = 100;
      } else {
        health += number;
      }
      console.log(`You healed for ${number} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (type === "chest") {
      coins += number;
      console.log(`You found ${number} coins.`);
    } else {
      health -= number;
      if (health > 0) {
        console.log(`You slayed ${type}.`);
      } else {
        console.log(`You died! Killed by ${type}.`);
        console.log(`Best room: ${roomCount}`);
        isAlive = false;
        break;
      }
    }
  }
  if (isAlive) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
