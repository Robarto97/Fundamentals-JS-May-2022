function palindromeInt(arr) {
  for (let num of arr) {
    let current = String(num);
    let reversed = String(num).split("").reverse().join("");
    if(current === reversed){
        console.log(true);
    } else console.log(false);
  }
}

palindromeInt([32,2,232,1010]);
