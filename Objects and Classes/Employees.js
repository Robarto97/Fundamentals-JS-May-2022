function employees(arr) {
  let listObj = {};
  for (let person of arr) {
    listObj.name = person;
    listObj.number = person.length;
    console.log(`Name: ${listObj.name} -- Personal Number: ${listObj.number}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
