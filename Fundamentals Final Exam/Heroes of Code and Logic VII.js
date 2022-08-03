function heroes(arr) {
  let n = arr.shift();
  let heroes = new Map();
  let line;
  for (let i = 0; i < n; i++) {
    line = arr.shift();
    let [name, hp, mp] = line.split(" ");
    heroes.set(name, []);
    heroes.get(name).push(Number(hp));
    heroes.get(name).push(Number(mp));
  }

  while ((line = arr.shift()) !== "End") {
    let tokens = line.split(" - ");
    let action = tokens[0];
    let name = tokens[1];

    switch (action) {
      case "CastSpell":
        let mpNeeded = tokens[2];
        let spellName = tokens[3];
        if (heroes.get(name)[1] >= mpNeeded) {
          heroes.get(name)[1] -= mpNeeded;
          console.log(
            `${name} has successfully cast ${spellName} and now has ${
              heroes.get(name)[1]
            } MP!`
          );
        } else {
          console.log(`${name} does not have enough MP to cast ${spellName}!`);
        }
        break;
      case "TakeDamage":
        let dmg = tokens[2];
        let attacker = tokens[3];

        heroes.get(name)[0] -= dmg;
        if (heroes.get(name)[0] > 0) {
          console.log(
            `${name} was hit for ${dmg} HP by ${attacker} and now has ${
              heroes.get(name)[0]
            } HP left!`
          );
        } else {
          console.log(`${name} has been killed by ${attacker}!`);
          heroes.delete(name);
        }
        break;
      case "Recharge":
        let mpAmount = Number(tokens[2]);
        if (heroes.get(name)[1] + mpAmount > 200) {
          mpAmount = 200 - heroes.get(name)[1];
          heroes.get(name)[1] = 200;
        } else {
          heroes.get(name)[1] += mpAmount;
        }
        console.log(`${name} recharged for ${mpAmount} MP!`);
        break;
      case "Heal":
        let hpAmount = Number(tokens[2]);
        if (heroes.get(name)[0] + hpAmount > 100) {
          hpAmount = 100 - heroes.get(name)[0];
          heroes.get(name)[0] = 100;
        } else {
          heroes.get(name)[0] += hpAmount;
        }
        console.log(`${name} healed for ${hpAmount} HP!`);
        break;
    }
  }
  for (let [hero, heroInfo] of heroes) {
    console.log(`${hero}\n  HP: ${heroInfo[0]}\n  MP: ${heroInfo[1]}`);
  }
}

heroes([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
