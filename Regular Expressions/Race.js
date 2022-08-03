function race(arr) {
  let nameMap = new Map();
  let nameList = arr.shift().split(", ");

  nameList.forEach((person) => {
    nameMap.set(person, 0);
  });

  let letterPattern = /[A-Za-z]+/g;
  let digitsPattern = /\d/g;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "end of race") {
      break;
    }

    let name = arr[i].match(letterPattern).join("");
    let distance = arr[i]
      .match(digitsPattern)
      .map(Number)
      .reduce((a, b) => {
        return a + b;
      });

    if (nameMap.has(name)) {
      let prevDistance = nameMap.get(name);
      prevDistance += distance;
      nameMap.set(name, prevDistance);
    }
  }

  let sortedNames = Array.from(nameMap).sort((a, b) => b[1] - a[1]);
  let winners = sortedNames.slice(0, 3);
  console.log(`1st place: ${winners[0][0]}`);
  console.log(`2nd place: ${winners[1][0]}`);
  console.log(`3rd place: ${winners[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
