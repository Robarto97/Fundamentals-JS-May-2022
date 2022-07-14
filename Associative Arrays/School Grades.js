function schoolGrades(arr) {
  let result = {};

  for (let line of arr) {
    let grades = line.split(" ");
    let name = grades.shift();
    if (result.hasOwnProperty(name)) {
      for (let grade of grades) {
        result[name].push(grade);
      }
    } else {
      result[name] = grades;
    }
  }

  let entries = Object.entries(result);

  for (let [name, values] of entries) {
    let sum = 0;
    for (let value of values) {
      sum += Number(value);
    }
    let avg = sum / values.length;
    result[name] = avg.toFixed(2);
  }

  let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (let key of sorted) {
    console.log(`${key}: ${result[key]}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
