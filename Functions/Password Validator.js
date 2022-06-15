function passwordValidate(password) {
  let passArr = password.split("");
  let numCount = 0;
  let isLongEnough = false;
  let onlyLettersAndDigits = false;
  let hasTwoDigits = false;
  let arrayL = passArr.length;

  if (arrayL > 6 && arrayL <= 10) {
    isLongEnough = true;
  }

  for (let i = 0; i < arrayL; i++) {
    let currentChar = passArr[i];
    let asciiChar = currentChar.charCodeAt();
    if (
      (asciiChar >= 48 && asciiChar <= 57) ||
      (asciiChar >= 65 && asciiChar <= 90) ||
      (asciiChar >= 97 && asciiChar <= 122)
    ) {
      if (asciiChar >= 48 && asciiChar <= 57) {
        numCount++;
        if (numCount >= 2) {
          hasTwoDigits = true;
        }
      }
      onlyLettersAndDigits = true;
    } else {
      onlyLettersAndDigits = false;
      break;
    }
  }

  if (arrayL < 6 || arrayL > 10) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!onlyLettersAndDigits) {
    console.log("Password must consist only of letters and digits");
  }
  if (numCount < 2) {
    console.log("Password must have at least 2 digits");
  }
  if (isLongEnough && onlyLettersAndDigits && hasTwoDigits) {
    console.log("Password is valid");
  }
}

passwordValidate("Pa$s$s");
