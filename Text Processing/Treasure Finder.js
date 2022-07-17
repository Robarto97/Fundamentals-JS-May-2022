function treasureFinder(arr) {
  let sequence = arr.shift().split(" ").map(Number);
  let index = 0;
  let command = arr[index++];

  while (command !== "find") {
    let sentence = command.split("");
    for (let i = 0, j = 0; i < sentence.length; i++, j++) {
      if (j >= sequence.length) {
        j = 0;
      }

      let chAscii = sentence[i].charCodeAt();
      chAscii -= sequence[j];
      sentence[i] = String.fromCharCode(chAscii);
    }

    let text = sentence.join("");
    let startType = text.indexOf("&");
    let endType = text.lastIndexOf("&");
    let startCood = text.indexOf("<");
    let endCood = text.indexOf(">");

    let type = text.substring(startType + 1, endType);
    let coordinates = text.substring(startCood + 1, endCood);

    command = arr[index++];
    console.log(`Found ${type} at ${coordinates}`);
  }
}

treasureFinder([
  "1 4 2 5 3 2 1",
  'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
  "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
  "'stj)>34W68Z@",
  "find",
]);
