function printNthElement(arr) {
  let step = Number(arr[arr.length - 1]);
  arr.pop();
  let line = "";
  for(let i =0;i<arr.length;i+=step){
      line += arr[i] + " ";
  }
  console.log(line);
}

printNthElement(['5', '20', '31', '4', '20', '2'] );
