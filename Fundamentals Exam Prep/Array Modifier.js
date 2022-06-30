function arrModifier(arr) {
  let numbers = arr.shift().split(" ").map(Number);
  let index = 0;
  let command = arr[index++];

  while (command !== "end") {
    command = command.split(" ");
    let operation = command.shift();
    command = command.map(Number);

    switch (operation) {
      case "swap":
        let firstIndex = command[0];
        let secondIndex = command[1];
        let temp = numbers[firstIndex];
        numbers[firstIndex] = numbers[secondIndex];
        numbers[secondIndex] = temp;
        break;
      case "multiply":
        numbers[command[0]] *= numbers[command[1]];
        break;
      case "decrease":
        numbers = numbers.map(x => x-1);
        break;
    }
    command = arr[index++];
  }
  console.log(numbers.join(", "));
}

arrModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
