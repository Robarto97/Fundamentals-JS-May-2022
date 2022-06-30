function guineaPig(arr) {
  arr = arr.map(Number);
  let food = arr.shift() * 1000;
  let hay = arr.shift() * 1000;
  let cover = arr.shift() * 1000;
  let weight = arr.shift() * 1000;
  let days = 1;
  let isOut = false;

  while (days <= 30) {
    if (days % 6 === 0) {
      food -= 300;
      cover -= weight / 3;
      hay -= 0.05 * food;
    } else if (days % 3 === 0) {
      cover -= weight / 3;
      food -= 300;
    } else if (days % 2 === 0) {
      food -= 300;
      hay -= 0.05 * food;
    } else {
      food -= 300;
    }

    if (food <= 0 || hay <= 0 || cover <= 0) {
      isOut = true;
      break;
    }

    days++;
  }
  if (!isOut) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
        2
      )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
    );
  } else {
    console.log(`Merry must go to the pet store!`);
  }
}

guineaPig(["1", "1.5", "3", "1.5"]);
