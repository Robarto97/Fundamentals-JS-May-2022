function plantDiscovery(arr) {
  let n = arr.shift();
  let plants = {};
  let line;
  for (let i = 0; i < n; i++) {
    line = arr.shift();
    let [name, rarity] = line.split("<->");
    rarity = Number(rarity);
    plants[name] = { rarity, rating: [] };
  }

  while ((line = arr.shift()) !== "Exhibition") {
    let tokens = line.split(": ");
    let action = tokens.shift();
    let plantInfo = tokens.shift().split(" - ");
    let plantName = plantInfo.shift();

    switch (action) {
      case "Rate":
        let rating = Number(plantInfo.shift());
        if (plants.hasOwnProperty(plantName)) {
          plants[plantName].rating.push(rating);
        } else {
          console.log("error");
        }
        break;
      case "Update":
        let newRarity = Number(plantInfo.shift());
        if (plants.hasOwnProperty(plantName)) {
          plants[plantName].rarity = newRarity;
        } else {
          console.log("error");
        }
        break;
      case "Reset":
        if (plants.hasOwnProperty(plantName)) {
          plants[plantName].rating = [];
        } else {
          console.log("error");
        }
        break;
    }
  }
  console.log("Plants for the exhibition:");

  for (let plant of Object.keys(plants)) {
    if (!plants[plant].rating.length) {
      plants[plant].rating = 0;
    } else {
      plants[plant].rating =
        plants[plant].rating.reduce((a, b) => a + b, 0) /
        plants[plant].rating.length;
    }

    console.log(
      `- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${plants[
        plant
      ].rating.toFixed(2)}`
    );
  }
}

plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
