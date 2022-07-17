function serialString(arr) {
  let words = arr[0].split("");
  let letters = new Map();

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!letters.has(word)) {
      letters.set(word, new Set());
    }
    letters.get(word).add(i);
  }
  let entries = Array.from(letters.entries());
  for (let [key, indexes] of entries) {
    let text = [];
    for (let index of indexes) {
      text.push(index);
    }
    console.log(`${key}:${text.join("/")}`);
  }
}

serialString(["avjavamsdmcalsdm"]);
