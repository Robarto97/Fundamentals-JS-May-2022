function needForSpeed(arr) {
  let n = Number(arr.shift());
  let cars = new Map();

  for (let i = 0; i < n; i++) {
    let [car, mileage, fuel] = arr.shift().split("|");
    cars.set(car, []);
    cars.get(car).push(Number(mileage));
    cars.get(car).push(Number(fuel));
  }

  let line;
  while ((line = arr.shift()) !== "Stop") {
    let tokens = line.split(" : ");
    let operation = tokens[0];
    let givenCar = tokens[1];
    switch (operation) {
      case "Drive":
        let distance = Number(tokens[2]);
        let fuel = Number(tokens[3]);
        if (cars.get(givenCar)[1] >= fuel) {
          cars.get(givenCar)[1] -= fuel;
          cars.get(givenCar)[0] += distance;
          console.log(
            `${givenCar} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
          );
        } else {
          console.log(`Not enough fuel to make that ride`);
        }
        if (cars.get(givenCar)[0] >= 100000) {
          console.log(`Time to sell the ${givenCar}!`);
          cars.delete(givenCar);
        }
        break;
      case "Refuel":
        let givenFuel = Number(tokens[2]);

        let sum = givenFuel + cars.get(givenCar)[1];
        if (sum > 75) {
          cars.get(givenCar)[1] = 75;
          sum -= 75;
          console.log(`${givenCar} refueled with ${givenFuel - sum} liters`);
        } else {
          cars.get(givenCar)[1] = sum;
          console.log(`${givenCar} refueled with ${givenFuel} liters`);
        }
        break;
      case "Revert":
        let kilometers = Number(tokens[2]);

        cars.get(givenCar)[0] -= kilometers;
        if (cars.get(givenCar)[0] < 10000) {
          cars.get(givenCar)[0] = 10000;
        } else {
          console.log(
            `${givenCar} mileage decreased by ${kilometers} kilometers`
          );
        }
        break;
    }
  }
  for (let [car, carInfo] of cars) {
    console.log(
      `${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`
    );
  }
}

needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
