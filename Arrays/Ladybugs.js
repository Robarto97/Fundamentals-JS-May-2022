function ladybugs(arr) {
  let size = arr[0];
  let indexes = arr[1].split(" ");
  let field = [];
  let commands = arr.slice(2);

  for (let i = 0; i < size; i++) {
    field.push(0);
  }

  for (let i = 0; i < indexes.length; i++) {
    let position = Number(indexes[i]);
    if (position > field.length - 1) {
      continue;
    }
    field[position] = 1;
  }

  for (let i = 0; i < commands.length; i++) {
    let currCommand = commands[i];
    currCommand = currCommand.split(" ");

    let position = Number(currCommand[0]);
    let direction = currCommand[1];
    let flyLength = Number(currCommand[2]);

    if (field[position] === 0 || position < 0 || position > field.length - 1) {
      continue;
    }

    field[position] = 0;

    if (flyLength < 0) {
      direction = direction === "right" ? "left" : "right";
      flyLength = Math.abs(flyLength);
    }

    let nextPosition = 0;

    if (direction === "right") {
      nextPosition = position + flyLength;
    } else if (direction === "left") {
      nextPosition = position - flyLength;
    }

    while (field[nextPosition] === 1) {
      if (direction === "right") {
        nextPosition += flyLength;
      } else if (direction === "left") {
        nextPosition -= flyLength;
      }
    }
    if (nextPosition > field.length - 1 || nextPosition < 0) {
      continue;
    }
    field[nextPosition] = 1;
  }
  console.log(field.join(" "));
}

ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
);
