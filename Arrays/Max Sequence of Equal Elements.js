function maxSequence(arr) {
  let maxSequence = [];

  for (let i = 0; i < arr.length; i++) {
    let currSequence = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currSequence.push(arr[i]);
      } else break;
    }
    if (currSequence.length > maxSequence.length) {
      maxSequence = currSequence;
    }
  }
  console.log(maxSequence.join(" "));
}

maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
