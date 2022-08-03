function passReset(arr) {
  let text = arr.shift();
  let line = arr.shift();
  let textArr = "";

  while (line !== "Done") {
    let [operation, firstPam, secondPam] = line.split(" ");
    switch (operation) {
      case "TakeOdd":
        textArr = text.split("");
        text = "";
        for (let i = 1; i < textArr.length; i += 2) {
          text += textArr[i];
        }
        console.log(text);
        break;
      case "Cut":
        let index = Number(firstPam);
        let length = Number(secondPam);
        let substr = text.substring(index, index + length);
        text = text.replace(substr, "");
        console.log(text);
        break;
      case "Substitute":
        let subString = firstPam;
        let substitute = secondPam;
        let contains = false;

        while (text.includes(subString)) {
          text = text.replace(subString, substitute);
          contains = true;
        }
        if (contains) {
          console.log(text);
        } else {
          console.log(`Nothing to replace!`);
        }
        break;
    }

    line = arr.shift();
  }
  console.log(`Your password is: ${text}`);
}

passReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
