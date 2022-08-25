function degustationParty(arr) {
  let guests = new Map();
  let line;
  let dislikedCount = 0;

  while ((line = arr.shift()) !== "Stop") {
    let [command, guest, meal] = line.split("-");

    switch (command) {
      case "Like":
        if (!guests.has(guest)) {
          guests.set(guest, []);
          guests.get(guest).push(meal);
        } else {
          if (!guests.get(guest).includes(meal)) {
            guests.get(guest).push(meal);
          }
        }
        break;
      case "Dislike":
        if (!guests.has(guest)) {
          console.log(`${guest} is not at the party.`);
        } else {
          if (!guests.get(guest).includes(meal)) {
            console.log(
              `${guest} doesn't have the ${meal} in his/her collection.`
            );
          } else {
            console.log(`${guest} doesn't like the ${meal}.`);
            dislikedCount++;
            let index = guests.get(guest).indexOf(meal);
            guests.get(guest).splice(index, 1);
          }
        }
        break;
    }
  }
  for (let [guest, meal] of guests) {
    console.log(`${guest}: ${meal.join(", ")}`);
  }
  console.log(`Unliked meals: ${dislikedCount}`);
}

degustationParty(["Like-Katy-fish", "Dislike-Katy-fish", "Stop"]);
