function easterEggs(arr) {
  let text = arr.shift();
  let pattern = /[@,#]+(?<color>[a-z]{3,})[@,#]+\W*[\/]+(?<amount>\d+)[\/]+/g;

  let match;
  while ((match = pattern.exec(text)) !== null) {
    let color = match.groups["color"];
    let amount = match.groups["amount"];
    console.log(`You found ${amount} ${color} eggs!`);
  }
}

easterEggs(["#@##@red@#/8/@rEd@/2/#@purple@////10/"]);
