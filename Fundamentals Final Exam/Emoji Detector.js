function emojiDetector(arr) {
  let sum = 1;
  let words = arr[0].split(" ");
  let text = words.join("");
  let count = 0;
  let emojis = [];
  let pattern = /(:{2}|\*{2})([A-Z][a-z]{2,})\1/g;

  for (let ch of text) {
    if (ch > 0 && ch < 10) {
      sum *= ch;
    }
  }
  console.log(`Cool threshold: ${sum}`);

  while ((match = pattern.exec(text)) !== null) {
    count++;
    let emojiCoolNum = 0;
    let word = match[2];
    for (let ch of word) {
      emojiCoolNum += ch.charCodeAt();
    }

    if (emojiCoolNum >= sum) {
      emojis.push(match[0]);
    }
  }
  console.log(`${count} emojis found in the text. The cool ones are:`);
  for (let emoji of emojis) {
    console.log(emoji);
  }
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley::This includes 3**Tigers**, 1::Elephant:, 12**Monk3ys**, a **Gorilla::, 5::fox:es: and 21 different types of :Snak::Es::. ::Mooning::**Shy**",
]);
