function charsInRange(char1, char2) {
  let start = Math.min(char1.charCodeAt(),char2.charCodeAt());
  let end = Math.max(char1.charCodeAt(),char2.charCodeAt());
  let result = [];
  
  for(let i= start+1;i<end;i++){
      let current = String.fromCharCode(i);
      result.push(current);
  }
  console.log(result.join(" "));
}

charsInRange("a", "d");
