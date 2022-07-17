function repeatingChars(str) {
  let text = str[0];
  let index = 1;

  while (index < str.length) {
    if (str[index] !== str[index - 1]) {
      text += str[index];
    }
    index++;
  }

  console.log(text);
}

repeatingChars("aaaaabbbbbcdddeeeedssaa");
