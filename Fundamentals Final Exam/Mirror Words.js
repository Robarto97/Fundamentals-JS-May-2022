function mirrorWords(arr) {
  let text = arr.shift();
  let pattern = /([@|#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  let validPairs = [];
  let mirrorWords = [];

  while ((match = pattern.exec(text)) !== null) {
    let firstWord = match[2];
    let secondWord = match[3];
    validPairs.push([firstWord, secondWord]);
    let reversedSecondWord = secondWord.split("").reverse().join("");
    if (firstWord === reversedSecondWord) {
      mirrorWords.push([`${firstWord} <=> ${secondWord}`]);
    }
  }
  if (validPairs.length > 0) {
    console.log(`${validPairs.length} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }
  if (mirrorWords.length > 0) {
    console.log(`The mirror words are:`);
    console.log(mirrorWords.join(", "));
  } else {
    console.log("No mirror words!");
  }
}

mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
