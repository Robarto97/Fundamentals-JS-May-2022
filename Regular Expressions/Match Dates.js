function dates(arr) {
  let pattern = /\b(\d{2})([-.\/])([A-Z][a-z]{2})\2(\d{4})\b/g;
  let allDates = arr[0];

  while ((match = pattern.exec(allDates)) !== null) {
    let day = match[1];
    let month = match[3];
    let year = match[4];
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}

dates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
