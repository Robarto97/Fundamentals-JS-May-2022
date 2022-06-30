function blackFlag(arr) {
  arr = arr.map(Number);
  let days = arr.shift();
  let dailyPlunder = arr.shift();
  let goal = arr.shift();
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += dailyPlunder;
    if (i % 3 === 0) {
      totalPlunder += dailyPlunder * 0.5;
    }
    if (i % 5 === 0) {
      totalPlunder *= 0.7;
    }
  }
  if (totalPlunder >= goal) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (totalPlunder / goal) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
