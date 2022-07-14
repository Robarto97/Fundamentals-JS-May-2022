function partyTime(arr) {
  let vip = [];
  let normal = [];
  let isParty = false;

  for (let line of arr) {
    if (line === "PARTY") {
      isParty = true;
      continue;
    }

    if (!isParty) {
      let firstCh = line[0];
      if (isNaN(firstCh)) {
        normal.push(line);
      } else {
        vip.push(line);
      }
    } else {
      let firstCh = line[0];
      if (isNaN(firstCh)) {
        let index = normal.indexOf(line);
        normal.splice(index, 1);
      } else {
        let index = vip.indexOf(line);
        vip.splice(index, 1);
      }
    }
  }

  let size = vip.length + normal.length;
  console.log(size);

  for (let el of vip) {
    console.log(el);
  }
  for (let el of normal) {
    console.log(el);
  }
}

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
