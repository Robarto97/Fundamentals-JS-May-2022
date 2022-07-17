function countStr(text, word) {
  let count = 0;
  let textArr = text.split(" ");
  for (let w of textArr) {
    if (w === word) {
      count++;
    }
  }
  console.log(count);
}

countStr("This is a word and it also is a sentence", "is");
