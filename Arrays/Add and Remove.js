function addRemove(arr) {
  let result = [];
  let num = 1;
  for (let command of arr) {
    if (command === "add") {
      result.push(num);
      num++;
    } else {
      result.pop();
      num++;
    }
  }
  if (result.length !== 0) {
    console.log(result.join(" "));
  } else {
    console.log("Empty");
  }
}

addRemove(["add", "add", "add", "add"]);
