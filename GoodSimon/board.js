/*
Create a Board object. A Board contains the locations of living cells.
@constructor
*/
var Board = function(x, y) {
  that = {};
  that = Object.create(Board.prototype);
  var grid = {};
  var subscribers = [];

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
  var publishChanges = function(x, y) {
    subscribers.forEach(function(subscriber) { subscriber(x,y); });
  }
  Object.freeze(that);
  return that;
};

