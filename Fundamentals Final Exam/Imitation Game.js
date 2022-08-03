function imitationGame(arr) {
  let message = arr.shift();
  let line;
  while ((line = arr.shift()) !== "Decode") {
    let tokens = line.split("|");
    let action = tokens[0];

    switch (action) {
      case "Move":
        let n = Number(tokens[1]);
        let letters = message.substring(0, n);
        let lefotvers = message.substring(n);
        message = lefotvers + letters;
        break;
      case "Insert":
        let index = Number(tokens[1]);
        let value = tokens[2];
        let firstHalf = message.substring(0, index);
        let secondHalf = message.substring(index);
        message = firstHalf + value + secondHalf;
        break;
      case "ChangeAll":
        let substr = tokens[1];
        let replacement = tokens[2];
        while (message.includes(substr)) {
          message = message.replace(substr, replacement);
        }
        break;
    }
  }
  console.log(`The decrypted message is: ${message}`);
}
imitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
