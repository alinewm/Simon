/*
 * Board comprises of many squares, each knowing its x and y coordinate.
 * As we create the jquery squares, we put them inside an array of references
 */
var BoardWidget = function(domContainer, board, rows, cols) {
  that = {};
  var jqueryBoard = [];

  var Cell = function(xyList) {
    var node = $("<div>").addClass("cell").css({
        "width": "10px",
        "height": "10px",
        "border": "1px solid black",
        "float": "left",
        "background-color": "white"
    }).click(function() {
      $(this).trigger('board:squareClicked', [xyList[0], xyList[1]]);
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

  var turnOff = function(coordinate) {
    var x = coordinate[0];
    var y = coordinate[1];
    jqueryBoard[y][x].css("background-color", "white");
  };

  var lightUp = function(coordinate, color) {
    var x = coordinate[0];
    var y = coordinate[1];
    jqueryBoard[y][x].css("background-color", color);
  };

//pass index and increment index more efficient than shifting
  that.blinkList = function(coordinates, i, color) {
    console.log('blinkList args: ' + coordinates + ', ' + i + ', ' + color);
    setTimeout(function() {
      if(i < coordinates.length) {
        var coordinate = coordinates[i];
        lightUp(coordinate, color);
        setTimeout(function() {
          turnOff(coordinate, color);
          that.blinkList(coordinates, i+1, color);
        }, 1000);
      }
    },1000);
    };

  /*
   * Gotta pass anonymous fn to setTimeout otherwise it's executed immediately
   */
  board.subscribe(function(coordinates, color) {
    //blinkList(coordinates, 0, color);
  });
  return that;

};
