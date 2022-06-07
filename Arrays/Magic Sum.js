function magicSum(arr, number) {
  let validPair = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === number) {
        validPair += arr[i] + " " + arr[j] + "\n";
      }
    }
  }
  console.log(validPair);
}

magicSum([1, 2, 3, 4, 5, 6], 6);
