function pirates(arr) {
  let line;
  let cities = new Map();

  while ((line = arr.shift()) !== "Sail") {
    let [city, population, gold] = line.split("||");
    if (cities.has(city)) {
      cities.get(city)[0] += Number(population);
      cities.get(city)[1] += Number(gold);
    } else {
      cities.set(city, []);
      cities.get(city).push(Number(population));
      cities.get(city).push(Number(gold));
    }
  }
  while ((line = arr.shift()) !== "End") {
    let tokens = line.split("=>");
    let action = tokens[0];
    let town = tokens[1];

    switch (action) {
      case "Plunder":
        let people = Number(tokens[2]);
        let gold = Number(tokens[3]);
        cities.get(town)[0] -= people;
        cities.get(town)[1] -= gold;
        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
        if (cities.get(town)[0] <= 0 || cities.get(town)[1] <= 0) {
          console.log(`${town} has been wiped off the map!`);
          cities.delete(town);
        }
        break;
      case "Prosper":
        let goldGain = Number(tokens[2]);
        if (goldGain < 0) {
          console.log(`Gold added cannot be a negative number!`);
          continue;
        }
        cities.get(town)[1] += goldGain;
        console.log(
          `${goldGain} gold added to the city treasury. ${town} now has ${
            cities.get(town)[1]
          } gold.`
        );
        break;
    }
  }
  if (cities.size === 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${cities.size} wealthy settlements to go to:`
    );
    for (let [city, cityInfo] of cities) {
      console.log(
        `${city} -> Population: ${cityInfo[0]} citizens, Gold: ${cityInfo[1]} kg`
      );
    }
  }
}

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
