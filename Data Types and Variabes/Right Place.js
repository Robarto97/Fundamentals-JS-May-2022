function rightPlace(str1, char, str2) {
  let res = str1.replace("_", char);
  console.log(res === str2 ? "Matched" : "Not Matched");
}

rightPlace("Str_ng", "i", "String");
