function activationKeys(arr) {
  let rawKey = String(arr.shift());
  let index = 0;
  let line = arr[index++];
  let keysArr = rawKey.split("");

  while (line !== "Generate") {
    let tokens = line.split(">>>");

    let operation = tokens.shift();

    switch (operation) {
      case "Contains":
        let substr = tokens.shift();
        rawKey = keysArr.join("");
        if (rawKey.includes(substr)) {
          console.log(`${rawKey} contains ${substr}`);
        } else {
          console.log(`Substring not found!`);
        }
        break;
      case "Flip":
        let side = tokens.shift();
        let start = Number(tokens.shift());
        let end = Number(tokens.shift());

        switch (side) {
          case "Upper":
            for (let i = start; i < end; i++) {
              keysArr[i] = keysArr[i].toUpperCase();
            }
            break;
          case "Lower":
            for (let i = start; i < end; i++) {
              keysArr[i] = keysArr[i].toLowerCase();
            }
            break;
        }
        console.log(keysArr.join(""));
        break;
      case "Slice":
        let startI = Number(tokens.shift());
        let endI = Number(tokens.shift());
        keysArr.splice(startI, endI - startI);
        console.log(keysArr.join(""));
        break;
    }

    line = arr[index++];
  }
  console.log(`Your activation key is: ${keysArr.join("")}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
