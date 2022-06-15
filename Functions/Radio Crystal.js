function radioCrystal(arr) {
  let targetThickness = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currThickness = arr[i];
    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;

    console.log(`Processing chunk ${currThickness} microns`);

    let cut = (number) => number / 4;
    let lap = (number) => number * 0.8;
    let grind = (number) => number - 20;
    let etch = (number) => number - 2;
    let xray = (number) => number + 1;

    while (currThickness !== targetThickness) {
      while (currThickness / 4 >= targetThickness) {
        currThickness = cut(currThickness);
        cutCount++;
      }
      if (cutCount > 0) {
        console.log(`Cut x${cutCount}`);
        console.log(`Transporting and washing`);
        currThickness = Math.floor(currThickness);
      }

      while (currThickness * 0.8 >= targetThickness) {
        currThickness = lap(currThickness);
        lapCount++;
      }
      if (lapCount > 0) {
        console.log(`Lap x${lapCount}`);
        console.log(`Transporting and washing`);
        currThickness = Math.floor(currThickness);
      }
      while (currThickness - 20 >= targetThickness) {
        currThickness = grind(currThickness);
        grindCount++;
      }
      if (grindCount > 0) {
        console.log(`Grind x${grindCount}`);
        console.log(`Transporting and washing`);
        currThickness = Math.floor(currThickness);
      }

      while (currThickness - 2 >= targetThickness - 1) {
        currThickness = etch(currThickness);
        etchCount++;
      }
      if (etchCount > 0) {
        console.log(`Etch x${etchCount}`);
        console.log(`Transporting and washing`);
        currThickness = Math.floor(currThickness);
      }

      if (currThickness < targetThickness) {
        currThickness = xray(currThickness);
        console.log(`X-ray x1`);
      }
    }
    console.log(`Finished crystal ${targetThickness} microns`);
  }
}

radioCrystal([1000, 4000, 8100]);
