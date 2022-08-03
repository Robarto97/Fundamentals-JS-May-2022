function matchNumber(arr) {
  let pattern = /\+359([-| ])2\1[0-9]{3}\1[0-9]{4}\b/g;
  let validPhones = [];
  let numbers = arr[0];

  while ((match = pattern.exec(numbers)) !== null) {
    validPhones.push(match[0]);
  }

  console.log(validPhones.join(", "));
}

matchNumber([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
