function barIncome(arr) {
  let totalSum = 0;
  let pattern =
    /\%(?<name>[A-Z][a-z]+)\%[^$%|.0-9]*\<(?<product>\w+)\>[^$%|.0-9]*\|(?<count>\d+)\|[^$%|.0-9]*(?<price>[\d.]+)\$/g;
  let text = arr.join(" ");
  let match;

  while ((match = pattern.exec(text)) !== null) {
    let currPrice = match.groups.count * match.groups.price;
    totalSum += currPrice;
    console.log(
      `${match.groups.name}: ${match.groups.product} - ${currPrice.toFixed(2)}`
    );
  }

  console.log(`Total income: ${totalSum.toFixed(2)}`);
}

barIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
