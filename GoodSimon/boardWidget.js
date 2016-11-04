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
    }).on('click', function() {
      $(document).trigger('board:squareClicked', [xyList[0], xyList[1]]);
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

  var turnOff = function(x, y) {
    jqueryBoard[y][x].css("background-color", "white");
  };

  var lightUp = function(x, y) {
    jqueryBoard[y][x].css("background-color", "green");
  };

  var blink = function(coordinate, callback) {
    var x = coordinate[0];
    var y = coordinate[1];
    lightUp(x, y);
    console.log('blink: ' + x + ',' + y );
    setTimeout(function() {
      turnOff(x, y);
      callback();}, 1000);
  }
//pass index and increment index
  var blinkList = function(coordinates) {
    if(! _.isEmpty(coordinates)) {
      blink(coordinates.shift(),
           function() { blinkList(coordinates); });
    }
    };

  /*
   * Gotta pass anonymous fn to setTimeout otherwise it's executed immediately
   */
  board.subscribe(function(coordinates) {
    blinkList(coordinates);
  });

};
