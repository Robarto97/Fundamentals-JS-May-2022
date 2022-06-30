function angryCat(ratings, entry, type) {
  let leftSum = 0;
  let rightSum = 0;
  let temp = ratings[entry];
  let leftSide = ratings.slice(0, entry);
  let rightSide = ratings.slice(entry + 1);

  if (type === "cheap") {
    leftSide = leftSide.filter((x) => x < temp);
    rightSide = rightSide.filter((x) => x < temp);
  } else {
    leftSide = leftSide.filter((x) => x >= temp);
    rightSide = rightSide.filter((x) => x >= temp);
  }

  for (let x of leftSide) {
    leftSum += x;
  }
  for (let x of rightSide) {
    rightSum += x;
  }

  if (leftSum >= rightSum) {
    console.log(`Left - ${leftSum}`);
  } else if (leftSum < rightSum) {
    console.log(`Right - ${rightSum}`);
  }
}

angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
