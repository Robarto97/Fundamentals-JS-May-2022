function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];

  for (let catData of arr) {
    catData = catData.split(" ");
    let catName = catData[0];
    let catAge = catData[1];
    let myCat = new Cat(catName, catAge);
    cats.push(myCat);
  }

  for (let cat of cats) {
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
