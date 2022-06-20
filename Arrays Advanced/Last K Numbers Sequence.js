function lastKNumsSeq(n, k) {
  let result = [1];

  for (let i = 0; i < n-1; i++) {
    let lastKNums = result.slice(-k);
    let sum = 0;
    for (el of lastKNums) {
      sum += el;
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}

lastKNumsSeq(6,3)
