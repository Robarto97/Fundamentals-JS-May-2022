function piccolo(arr) {
  let parking = new Set();

  for (let line of arr) {
    let tokens = line.split(", ");
    let command = tokens[0];
    let carNum = tokens[1];

    switch (command) {
      case "IN":
        parking.add(carNum);
        break;
      case "OUT":
        parking.delete(carNum);
        break;
    }
  }

  if (parking.size === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    let sorted = Array.from(parking).sort((a, b) => a.localeCompare(b));
    console.log(sorted.join("\n"));
  }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
