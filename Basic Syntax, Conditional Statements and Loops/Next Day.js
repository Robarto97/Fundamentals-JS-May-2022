function nextDay(year, month, day) {
  const date = new Date(year, month, day);
  let y = date.getFullYear();
  let m = date.getMonth();
  let d = date.getDate() + 1;

  if (d > 30) {
    m++;
    d = 1;
  }
  if (m > 12) {
    y++;
    m = 1;
  }
  if (m === 0) {
    m = 12;
    y--;
  }

  console.log(`${y}-${m}-${d}`);
}

// nextDay(2016, 9, 30);
// nextDay(2020, 3, 24);
nextDay(1951, 12, 24);
