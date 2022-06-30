function heartDelivery(arr) {
  let houses = arr.shift().split("@").map(Number);
  let index = 0;
  let commandLine = arr[index++];
  let i = 0;
  let isZero = true;
  let counter = 0;

  while (commandLine !== "Love!") {
    commandLine = commandLine.split(" ");
    let jumpLength = Number(commandLine[1]);

    i += jumpLength;
    if (i >= houses.length) {
      i = 0;
    }

    if (houses[i] === 0) {
      console.log(`Place ${i} already had Valentine's day.`);
    } else {
      houses[i] -= 2;
      if (houses[i] === 0) {
        console.log(`Place ${i} has Valentine's day.`);
      }
    }

    commandLine = arr[index++];
  }
  
  for (let x of houses) {
    if (x !== 0) {
      isZero = false;
      counter++;
    }
  }
  console.log(`Cupid's last position was ${i}.`);
  if (isZero) {
    console.log("Mission was succesful.");
  } else {
    console.log(`Cupid has failed ${counter} places.`);
  }
}

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
