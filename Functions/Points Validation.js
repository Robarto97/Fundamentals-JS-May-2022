function pointsValidation(arr) {
  let x1 = arr[0];
  let y1 = arr[1];
  let x2 = arr[2];
  let y2 = arr[3];

  function distanceCalc(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (distance % 1 === 0) {
      console.log(`{${x1 + ", " + y1}} to {${x2 + ", " + y2}} is valid`);
    } else {
      console.log(`{${x1 + ", " + y1}} to {${x2 + ", " + y2}} is invalid`);
    }
  }

  distanceCalc(x1, y1, 0, 0);
  distanceCalc(x2, y2, 0, 0);
  distanceCalc(x1, y1, x2, y2);
}

pointsValidation([2, 1, 1, 1]);
