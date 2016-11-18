var Game = function() {
  that = {};
  var interval;
  var sequence = [];

  that.start = function(board) {
    that.step(board);
    that.awaitUserAnswer(board, function() {that.start(board);});
  };

  that.awaitUserAnswer = function(board, callback) {
    answer_sequence = _.clone(sequence);
    $(".cell").on('board:squareClicked', function(e, x, y) {
      console.log('clicked');
      console.log([x, y]);

      //board.publishChanges([[x, y]], "red");

      var cellRef = $(this);
      $(this).css("background-color", "red");
      setTimeout(function() {
        cellRef.css("background-color", "white");
        if(_.isEqual(answer_sequence[0], [x, y])) {
          answer_sequence.shift();
          console.log('good job!');
        } else {
          console.log('answer_seq: ' + answer_sequence[0]);
          $(".cell").off("board:squareClicked");
          console.log('game over!');
        }

        if(_.isEmpty(answer_sequence)) {
          console.log('finished sequence!');
          $(".cell").off("board:squareClicked");
          callback();
        }
      }, 1000);
    });
  }

  var addMove = function(board) {
    var size = board.getSize();
    var x = Math.floor((Math.random() * size[0]));
    var y = Math.floor((Math.random() * size[1]));
    sequence.push([x,y]);
  }
  /*
   * Lights up a square
   */
  that.step = function(board) {
    addMove(board);
    board.publishChanges(_.clone(sequence), "green");
  };
  return that;
};
