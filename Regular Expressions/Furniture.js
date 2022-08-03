function furniture(arr) {
  let text = arr.join(" ");
  let validFurniture = [];
  let pattern =
    />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/g;
  let sum = 0;

  while ((match = pattern.exec(text)) !== null) {
    let validName = match.groups["furniture"];
    let validPrice = match.groups["price"];
    let validQuantity = match.groups["quantity"];

    validFurniture.push(validName);
    sum += validPrice * validQuantity;
  }

  console.log(`Bought furniture:`);
  validFurniture.forEach((el) => console.log(el));
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
