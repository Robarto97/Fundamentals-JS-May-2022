function addressBook(arr) {
  let result = {};

  for (let line of arr) {
    let [name, address] = line.split(":");
    result[name] = address;
  }
  let entries = Object.entries(result);
  let sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, address] of sortedEntries) {
    console.log(`${name} -> ${address}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
