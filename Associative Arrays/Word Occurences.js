function wordOccurences(arr) {
  let myMap = new Map();

  for (let word of arr) {
    let count = 1;
    if (myMap.has(word)) {
      count += myMap.get(word);
    }

    myMap.set(word, count);
  }
  let sorted = Array.from(myMap);
  sorted.sort((a, b) => b[1] - a[1]);

  for (let [word, count] of sorted) {
    console.log(`${word} -> ${count} times`);
  }
}

wordOccurences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
