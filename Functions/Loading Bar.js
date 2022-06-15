function loadingBar(input) {
  let completed = "%".repeat(input / 10);
  let incomplete = ".".repeat(10 - completed.length);

  if (completed.length === 10) {
    console.log(`${input}% Complete!`);
  } else {
    console.log(`${input}% [${completed + incomplete}]`);
    console.log("Still loading...");
  }
}

loadingBar(100);
