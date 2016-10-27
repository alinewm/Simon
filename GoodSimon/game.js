var Game = function() {
  that = {};
  var interval;
  var sequence = [];

  that.start = function(board) {
    interval = setInterval(function() {
    that.step(board);
    },2000);
  };

  that.stop = function() {
    clearInterval(interval);
  };
  /*
   * Lights up a square
   */
  that.step = function(board) {
    var size = board.getSize();
    var x = Math.floor((Math.random() * size[0]));
    var y = Math.floor((Math.random() * size[1]));
    console.log('chosen sq: ' + x + y);
    sequence.push([x,y]);
    board.publishChanges(x,y);
  };
  return that;
};
