function repeatString(str, n) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str;
  }
  console.log(newStr);
}

repeatString("abc", 2);
