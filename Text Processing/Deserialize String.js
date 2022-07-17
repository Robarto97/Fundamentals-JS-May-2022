function deserialString(arr) {
  let index = 0;
  let command = arr[index++];
  let letters = new Map();
  let text = [];

  while (command !== "end") {
    let [letter, indexes] = command.split(":");
    let indexesArr = indexes.split("/");
    if (!letters.has(letter)) {
      letters.set(letter, new Set());
    }
    for (let i of indexesArr) {
      letters.get(letter).add(i);
    }
    command = arr[index++];
  }

  for (let [key, indexes] of letters.entries()) {
    for (let index of indexes) {
      text[index] = key;
    }
  }

  console.log(text.join(""));
}

deserialString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
