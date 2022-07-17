function pascalCaseSplitter(str) {
  let arr = [];
  let index = 1;
  let end = str.length;
  let cut = 0;

  while (index < end) {
    if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) {
      arr.push(str.slice(cut, index));
      cut = index;
    }
    index++;
  }
  
  arr.push(str.slice(cut, index));
  console.log(arr.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
