function convertToObj(jsonStr) {
  let obj = JSON.parse(jsonStr);
  for (let key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
