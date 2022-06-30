function softUniReception(arr) {
  arr = arr.map(Number);
  let emp1 = arr.shift();
  let emp2 = arr.shift();
  let emp3 = arr.shift();
  let students = arr.shift();

  let hours = 0;
  let studentsPerHour = emp1 + emp2 + emp3;
  while (students > 0) {
    hours++;
    if (hours % 4 === 0) {
      continue;
    }
    if (students >= studentsPerHour) {
      students -= studentsPerHour;
    } else {
      students = 0;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}

softUniReception(["5", "6", "4", "20"]);
