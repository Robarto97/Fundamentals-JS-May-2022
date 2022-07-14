function storage(arr) {
  let result = new Map();

  for (let line of arr) {
    let [product, quantity] = line.split(" ");

    if (result.has(product)) {
      let oldQuantity = result.get(product);
      result.set(product, oldQuantity + Number(quantity));
    } else {
      result.set(product, Number(quantity));
    }
  }

  for(let [product, quantity] of result.entries()){
    console.log(`${product} -> ${quantity}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
