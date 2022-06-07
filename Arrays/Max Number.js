function maxNumber(arr) {
  let newArr = [];
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    let number1 = arr[i];
    let isLargest = true;

    for (let j = i + 1; j < arrL; j++) {
      let number2 = arr[j];
      if (number1 <= number2) {
        isLargest = false;
      }
    }
    if (isLargest) {
      newArr.push(number1);
    }
  }
  console.log(newArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
