function bombNumbers(nums, bombNums) {
  let specNum = bombNums[0];
  let power = bombNums[1];
  while (nums.includes(specNum)) {
    let index = nums.indexOf(specNum);
    let startIndex = Math.max(0,index-power)
    nums.splice(startIndex, 1 + power * 2);
  }
  let sum = 0;
  for (let el of nums) {
    sum += el;
  }
  console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
