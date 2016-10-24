/*
 * Board comprises of many squares, each knowing its x and y coordinate.
 * As we create the jquery squares, we put them inside an array of references
 */
var BoardWidget = function(domContainer, rows, cols) {
  var board = [];
  for(y=0; y<cols; y++) {
    var row = document.createElement('div');
    board.push([]);
    for(x=0; x<rows; x++) {
      var square = SquareWidget(row, Square(x,y));
      row.append(square);
      //board[x][y] = square;
    }
    domContainer.append(row);
  }
};
