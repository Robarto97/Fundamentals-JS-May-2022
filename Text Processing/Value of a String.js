function valueOfString(arr) {
  let text = arr[0];
  let target = arr[1];
  let sum = 0;

  switch (target) {
    case "UPPERCASE":
      for (let ch of text) {
        if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
          sum += ch.charCodeAt();
        }
      }
      break;
    case "LOWERCASE":
      for (let ch of text) {
        if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
          sum += ch.charCodeAt();
        }
      }
      break;
  }

  console.log(`The total sum is: ${sum}`);
}

valueOfString(["AC/DC", "UPPERCASE"]);
