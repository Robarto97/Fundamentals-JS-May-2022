function towns(arr) {
  let currentTown = {};

  for (let line of arr) {
    townElements = line.split(" | ");
    let townName = townElements[0];
    let latitude = Number(townElements[1]);
    let longitude = Number(townElements[2]);

    currentTown.town = townName;
    currentTown.latitude = latitude.toFixed(2);
    currentTown.longitude = longitude.toFixed(2);
    console.log(currentTown);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
