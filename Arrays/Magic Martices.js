function magicMatrices(arr) {
  let isMagical = true;
  let result = [];

  for (let row = 0; row < arr.length; row++) {
    let rowSum = 0;
    let colSum = 0;
    for (let col = 0; col < arr.length; col++) {
      rowSum += arr[row][col];
      colSum += arr[col][row];
    }
    result.push(rowSum, colSum);
  }

  let currSum = result[0];
  for (let i = 1; i < result.length; i++) {
    if (currSum !== result[i]) {
      isMagical = false;
    }
  }
  console.log(isMagical);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
