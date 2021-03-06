/*
Create a Board object. A Board contains the locations of living cells.
@constructor
*/
var Board = function(x, y) {
  that = {};
  that = Object.create(Board.prototype);
  var grid = new Array(y);
  for (var i=0; i<y; i++) {
    grid[i] = new Array(x);
  }
  var subscribers = [];

  that.getSize = function() {
    return [x,y];
  }
  /*
  Attach particular subscriber to a Board
  @param{function}
  */
  that.subscribe = function(subscriber) {
    subscribers.push(subscriber);
  }

  /*

  @param{Integer, Integer}
  */
  that.publishChanges = function(coordinates, color) {
    subscribers.forEach(function(subscriber) { subscriber(coordinates, color); });
  }
  Object.freeze(that);
  return that;
};

