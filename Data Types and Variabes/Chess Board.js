function chessBoard(num) {
  result = '<div class="chessboard">\n';

  for (let i = 0; i < num; i++) {
    result += "  <div>\n";
    for (let j = 0; j < num; j++) {
      result +=
        (i + j) % 2 === 0
          ? '    <span class="black"></span>\n'
          : '    <span class="white"></span>\n';
    }
    result += "  </div>\n";
  }
  result += "</div>";

  console.log(result);
}

chessBoard(3);
