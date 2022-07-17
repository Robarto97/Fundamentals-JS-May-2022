function strSubstr(target, text) {
  let textArr = text.split(" ");

  for (let word of textArr) {
    if (word.toLowerCase() === target.toLowerCase()) {
      console.log(target);
      return;
    }
  }

  console.log(`${target} not found!`);
}

strSubstr("javascript", "JavaScript is the best programming language");
