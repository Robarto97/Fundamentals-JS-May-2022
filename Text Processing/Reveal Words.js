function revealWords(words, text) {
  let wordsToReveal = words.split(", ");
  let textArr = text.split(" ");

  for (let element of wordsToReveal) {
    for (let word of textArr) {
      if (word.includes("*") && word.length === element.length) {
        text = text.replace(word, element);
      }
    }
  }

  console.log(text);
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
