function adAstra(arr) {
  let text = arr.shift();
  let pattern =
    /([#,|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
  let match;
  let totalCalories = 0;
  let items = [];

  while ((match = pattern.exec(text)) !== null) {
    let validItem = match.groups["item"];
    let validDate = match.groups["date"];
    let validCalories = Number(match.groups["calories"]);
    totalCalories += validCalories;
    items.push([validItem, validDate, validCalories]);
  }

  let days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  for (let [item, date, calories] of items) {
    console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
  }
}

adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
