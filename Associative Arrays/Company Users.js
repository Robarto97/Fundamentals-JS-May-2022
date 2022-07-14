function companyUsers(arr) {
  let result = new Map();

  for (let line of arr) {
    let [company, id] = line.split(" -> ");
    if (!result.has(company)) {
      result.set(company, new Set());
    }
    result.get(company).add(id);
  }
  let sorted = Array.from(result.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [company, id] of sorted) {
    console.log(company);
    for (let person of id) {
      console.log("--", person);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
