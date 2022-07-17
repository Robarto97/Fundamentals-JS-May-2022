function asciiSum(arr) {
  let firstCh = arr[0];
  let secondCh = arr[1];
  let text = arr[2];
  let sum = 0;

  let firstAscii = firstCh.charCodeAt();
  let secondAscii = secondCh.charCodeAt();
  let min = Math.min(firstAscii, secondAscii);
  let max = Math.max(firstAscii, secondAscii);

  for (let ch of text) {
    if (ch.charCodeAt() > min && ch.charCodeAt() < max) {
      sum += ch.charCodeAt();
    }
  }

  console.log(sum);
}

asciiSum(["?", "E", "@ABCEF"]);
