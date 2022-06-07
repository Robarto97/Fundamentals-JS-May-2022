function tseamAcc(arr) {
  let games = arr[0].split(" ");
  let line = arr[1];
  let index = 2;

  while (line !== "Play!") {
    line = line.split(" ");
    let command = line[0];
    let game = line[1];
    let expansion = "";

    if (game.includes("-")) {
      game = game.split("-");
      expansion = game.pop();
      game = game[0];
    }
    let i = games.indexOf(game);

    switch (command) {
      case "Install":
        if (!games.includes(game)) {
          games.push(game);
        }
        break;
      case "Uninstall":
        if (games.includes(game)) {
          games.splice(i, 1);
        }
        break;
      case "Update":
        if (games.includes(game)) {
          games.splice(i, 1);
          games.push(game);
        }
        break;
      case "Expansion":
        expansion = `${game}:${expansion}`;
        if (games.includes(game)) {
          games.splice(i + 1, 0, expansion);
        }
        break;
    }

    line = arr[index++];
  }
  console.log(games.join(" "));
}

tseamAcc([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
