function equalArrays(arr1, arr2) {
  let areEqual = true;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (Number(arr1[i]) !== Number(arr2[i])) {
      areEqual = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
    sum += Number(arr1[i]);
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(['1'], ['10']);
