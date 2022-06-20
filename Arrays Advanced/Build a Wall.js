function buildWall(arr) {
  let concretePerSection = 195;
  let concreteArr = [];
  let totalConcrete = 0;
  let costConcrete = 1900;
  let parsedArr = arr.map(Number);
  let crews = parsedArr.filter(len => len<30).length;

  while (crews !== 0) {
    let concretePerDay = 0;
    for (let i = 0; i < parsedArr.length; i++) {
      if (parsedArr[i] !== 30) {
        parsedArr[i]++;
        concretePerDay += concretePerSection;
        if (parsedArr[i] === 30) {
          crews--;
        }
      }
    }
    totalConcrete +=concretePerDay;
    concreteArr.push(concretePerDay);
  }

  console.log(concreteArr.join(", "));
  console.log(`${totalConcrete * costConcrete} pesos`);
}

buildWall([17, 22, 17, 19, 17]);
