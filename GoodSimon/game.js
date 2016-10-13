var Game = function() {
  that = {};
  var interval;

  that.start = function() {
    interval = setInterval(function() {
    that.step(board);
    }, 200);
  };

  that.stop = function() {
    clearInterval(interval);
  };

  that.step = function() {

  };
  return that;
}
