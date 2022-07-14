function wordsTracker(arr) {
  let words = arr.shift().split(" ");
  let result = new Map();

  for (let word of words) {
    result.set(word, 0);
  }

  for (let word of arr) {
    if (result.has(word)) {
      let oldValue = result.get(word);
      result.set(word, oldValue + 1);
    }
  }

  let sorted = Array.from(result).sort((a, b) => b[1] - a[1]);
  for (let [key, count] of sorted) {
    console.log(`${key} - ${count}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
