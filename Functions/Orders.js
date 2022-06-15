function orders(product, quantity) {
  let res = 0;
  let price = 0;
  switch (product) {
    case "coffee":
      price = 1.5;
      break;
    case "coke":
      price = 1.4;
      break;
    case "water":
      price = 1;
      break;
    case "snacks":
      price = 2;
      break;
  }
  res = totalPrice(price, quantity);

  function totalPrice(price, quantity) {
    return price * quantity;
  }
  
  console.log(res.toFixed(2));
}

orders("water", 5);
