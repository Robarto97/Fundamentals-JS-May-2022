function smallestTwoNums(arr) {
  let sortedArr = arr.sort((a, b) => a - b);

  console.log(sortedArr.slice(0,2).join(" "));
}

smallestTwoNums([30, 15, 50, 5]);
