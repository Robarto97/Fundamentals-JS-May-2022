function hogwarts(arr) {
  let spell = arr.shift();
  let line;

  while ((line = arr.shift()) !== "Abracadabra") {
    let tokens = line.split(" ");
    let action = tokens[0];

    switch (action) {
      case "Abjuration":
        spell = spell.toUpperCase();
        console.log(spell);
        break;
      case "Necromancy":
        spell = spell.toLowerCase();
        console.log(spell);
        break;
      case "Illusion":
        let index = Number(tokens[1]);
        let letter = tokens[2];
        if (index < 0 || index >= spell.length) {
          console.log("The spell was too weak.");
        } else {
          let firstHalf = spell.substring(0, index);
          let secondHalf = spell.substring(index + 1);
          spell = firstHalf + letter + secondHalf;
          console.log("Done!");
        }
        break;
      case "Divination":
        let firstSub = tokens[1];
        let secondSub = tokens[2];
        while (spell.includes(firstSub)) {
          spell = spell.replace(firstSub, secondSub);
        }
        console.log(spell);
        break;
      case "Alteration":
        let substring = tokens[1];
        if (spell.includes(substring)) {
          let subIndex = spell.indexOf(substring);
          let first = spell.substring(0, subIndex);
          let second = spell.substring(subIndex + substring.length);
          spell = first + second;
          console.log(spell);
        }
        break;
      default:
        console.log(`The spell did not work!`);
        break;
    }
  }
}

hogwarts([
  "SwordMaster",
  "Divination Master Knight",
  "Target TargetTarget",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  "Abracadabra",
]);
