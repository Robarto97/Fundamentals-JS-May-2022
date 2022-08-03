function matchName(str) {
  let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g;
  let res = [];

  while ((match = pattern.exec(str)) !== null) {
    res.push(match[0]);
  }

  console.log(res.join(" "));
}

matchName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
