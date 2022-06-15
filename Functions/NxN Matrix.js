function matrix(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j < num; j++) {
      row.push(num);
    }
    result.push(row.join(' '));
  }
  console.log(result.join('\n'));
}

matrix(7);
