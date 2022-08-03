function worldTour(arr) {
  let text = arr.shift();
  let line = arr.shift();

  while (line !== "Travel") {
    let [operation, firstParam, secondParam] = line.split(":");
    let startIndex, endIndex;
    switch (operation) {
      case "Add Stop":
        startIndex = Number(firstParam);
        if (startIndex < 0 || startIndex >= text.length) {
          console.log(text);
          break;
        }
        let value = secondParam;
        let firstPart = text.slice(0, startIndex);
        let secondPart = text.slice(startIndex);
        text = firstPart + value + secondPart;
        console.log(text);
        break;
      case "Remove Stop":
        startIndex = Number(firstParam);
        endIndex = Number(secondParam);
        if (!text[startIndex] || !text[endIndex]) {
          console.log(text);
          break;
        }
        let subStr = text.substring(startIndex, endIndex + 1);
        text = text.replace(subStr, "");
        console.log(text);
        break;
      case "Switch":
        let newValue = secondParam;
        let oldValue = firstParam;
        let pattern = new RegExp(oldValue, "g");
        text = text.replace(pattern, newValue);
        console.log(text);
        break;
    }

    line = arr.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${text}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
