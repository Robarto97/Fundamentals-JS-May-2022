function vacation(people, type, day) {
  let price = 0;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;
        case "Saturday":
          price = 9.8;
          break;
        case "Sunday":
          price = 10.46;
          break;
      }
      if (people >= 30) {
        price *= 0.85;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;
          break;
        case "Saturday":
          price = 15.6;
          break;
        case "Sunday":
          price = 16;
          break;
      }
      if (people >= 100) {
        people -= 10;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;
          break;
        case "Saturday":
          price = 20;
          break;
        case "Sunday":
          price = 22.5;
          break;
      }
      if (people >= 10 && people <= 20) {
        price *= 0.95;
      }
      break;
  }

  const totalPrice = price * people;
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday");
