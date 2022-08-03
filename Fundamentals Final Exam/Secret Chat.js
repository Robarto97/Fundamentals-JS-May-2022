function secretChat(arr) {
  let secretMessage = arr.shift();
  let line;

  while ((line = arr.shift()) !== "Reveal") {
    let tokens = line.split(":|:");
    let action = tokens[0];
    let isError = false;

    switch (action) {
      case "InsertSpace":
        let spaceIndex = Number(tokens[1]);
        let firstPart = secretMessage.substring(0, spaceIndex);
        let secondPart = secretMessage.substring(spaceIndex);
        secretMessage = firstPart + " " + secondPart;
        break;
      case "Reverse":
        let substring = tokens[1];
        if (secretMessage.includes(substring)) {
          let index = secretMessage.indexOf(substring);
          let firsHalf = secretMessage.substring(0, index);
          let secondHalf = secretMessage.substring(index + substring.length);
          let part = secretMessage.substring(index, index + substring.length);
          part = part.split("").reverse().join("");
          secretMessage = firsHalf + secondHalf + part;
        } else {
          console.log("error");
          isError = true;
        }
        break;
      case "ChangeAll":
        let substr = tokens[1];
        let replacement = tokens[2];
        while (secretMessage.includes(substr)) {
          secretMessage = secretMessage.replace(substr, replacement);
        }
        break;
    }
    if (!isError) {
      console.log(secretMessage);
    }
  }

  console.log(`You have a new text message: ${secretMessage}`);
}

secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
