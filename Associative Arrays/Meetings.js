function meeting(arr) {
  let result = {};
  for (let line of arr) {
    let [day, name] = line.split(" ");
    if (result.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      result[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (let key in result) {
    console.log(`${key} -> ${result[key]}`);
  }
}

meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
