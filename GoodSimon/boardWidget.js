/*
 * Board comprises of many squares, each knowing its x and y coordinate.
 * As we create the jquery squares, we put them inside an array of references
 */
var BoardWidget = function(domContainer, board, rows, cols) {
  var jqueryBoard = [];

  var Cell = function(xyList) {
    var node = $("<div>").css({
        "width": "10px",
        "height": "10px",
        "border": "1px solid black",
        "float": "left",
        "background-color": "white"
    });
    return node;
  }

  for(y=0; y<cols; y++) {
    var row = $('<div>');
    var jqueryRow = [];
    for(x=0; x<rows; x++) {
      var cell = Cell([x, y]);
      row.append(cell);
      jqueryRow.push(cell);
    }
    domContainer.append(row);
    jqueryBoard.push(jqueryRow);
  }
  var lightUp = function(x, y) {
    jqueryBoard[y][x].css("background-color", "green");
  };

  board.subscribe(function(x, y) {
    lightUp(x, y);
  });

};
