function sorting(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = [];

  while (arr.length > 0) {
    result.push(sorted[sorted.length - 1]);
    sorted.pop();
    result.push(sorted[0]);
    sorted.shift();
  }

  console.log(result.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
