function echoType(input) {
  console.log(typeof input);
  let type = typeof input;
  if (type === "string" || type === "number") {
    console.log(input);
  } else console.log("Parameter is not suitable for printing");
}

echoType(null);
