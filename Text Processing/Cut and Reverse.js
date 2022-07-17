function cutReverse(str) {
  let reversed = str.split("").reverse().join("");
  let halfOne = reversed.slice(0, reversed.length / 2);
  let halfTwo = reversed.slice(reversed.length / 2);

  console.log(halfTwo);
  console.log(halfOne);
}

cutReverse("tluciffiDsIsihTgnizamAoSsIsihT");
