function destinationMap(text) {
  let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
  let points = 0;
  let destinations = [];
  let match;

  while ((match = pattern.exec(text)) !== null) {
    let destination = match[2];
    destinations.push(destination);
    points += destination.length;
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}

destinationMap("ThisIs some InvalidInput");
