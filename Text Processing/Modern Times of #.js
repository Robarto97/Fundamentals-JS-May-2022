function modernTimes(text) {
  let sentence = text.split(" ");

  for (let word of sentence) {
    if (word.length > 1 && word.startsWith("#")) {
      let flag = true;
      let wordLower = word.toLowerCase();

      for (let i = 1; i < wordLower.length; i++) {
        if (!isNaN(wordLower[i])) {
          flag = false;
          break;
        }
      }

      if (flag) {
        console.log(word.substring(1));
      }
    }
  }
}

modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
