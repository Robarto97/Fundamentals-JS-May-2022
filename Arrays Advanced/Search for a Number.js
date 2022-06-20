function searchNumber(mainArr, commands) {
  let takeNum = commands[0];
  let deleteNum = commands[1];
  let targetNum = commands[2];
  let counter = 0;

  let newArr = mainArr.slice(0, takeNum);

  for (let i = 0; i < deleteNum; i++) {
    newArr.shift();
  }

  while (newArr.includes(targetNum)) {
    let index = newArr.indexOf(targetNum);
    newArr.splice(index, 1);
    counter++;
  }
  console.log(`Number ${targetNum} occurs ${counter} times.`);
}

searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
