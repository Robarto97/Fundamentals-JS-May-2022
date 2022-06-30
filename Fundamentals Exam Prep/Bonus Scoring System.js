function bonusScoreSys(arr) {
  arr = arr.map(Number);
  let studentsNum = arr.shift();
  let lectures = arr.shift();
  let addBonus = arr.shift();
  let max = 0;
  let maxAttendace = 0;

  for (let i = 0; i < studentsNum; i++) {
    let attendance = arr[i];
    let totalPoints = (attendance / lectures) * (5 + addBonus);
    if(max < totalPoints){
        max = totalPoints;
        maxAttendace = attendance;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(max)}.`);
  console.log(`The student has attended ${maxAttendace} lectures.`);
}

bonusScoreSys(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoreSys([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
