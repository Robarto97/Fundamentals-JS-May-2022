function numbers(arr) {
  arr = arr.split(" ").map(Number);
  let sum = 0;
  for (let x of arr) {
    sum += x;
  }

  let avg = sum / arr.length;
  arr = arr
    .filter((x) => x > avg)
    .sort((a, b) => b - a)
    .slice(0, 5);

  console.log(arr.length > 0 ? arr.join(" ") : "No");
}

numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
