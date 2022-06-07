function rotateArray(arr) {
  let rotations = arr[arr.length - 1];
  arr.pop();
  while (rotations > 0) {
    let temp = arr.pop();
    arr.unshift(temp);
    rotations--;
  }
  console.log(arr.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15']
);
