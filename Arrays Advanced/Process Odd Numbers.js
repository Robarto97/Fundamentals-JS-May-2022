function processOddNums(arr) {
  let filteredArr = arr.filter((el, i) => i % 2 == 1);
  let reverseDoubled = filteredArr.map(x=>x*2).reverse();
  console.log(reverseDoubled.join(' '));
}

processOddNums([10,15,20,25])
