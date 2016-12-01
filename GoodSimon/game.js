var Game = function() {
  that = {};
  var initialTime = null;
  var sequence = [];
  var activeHandlers = false;

  that.start = function(board) {
    that.step(board, function() {
      that.awaitUserAnswer(board, function() {that.start(board);});
    });
  };

  that.restart = function() {
    alert('game over!');
    document.location.href = "";
  };

  that.awaitUserAnswer = function(board, callback) {
  //var timer = null;
    setTimeout(that.tick, 0);
    answer_sequence = _.clone(sequence);

    if (!activeHandlers) {
    $(".cell").on('board:squareClicked', function(e, x, y) {
      console.log('clicked');
      console.log([x, y]);

      //board.publishChanges([[x, y]], "red");

      var cellRef = $(this);
      cellRef.css("background-color", "red");
      setTimeout(function() {
        cellRef.css("background-color", "white");
        if(_.isEqual(answer_sequence[0], [x, y])) {
          answer_sequence.shift();
          console.log('good job!');
        } else {
          console.log('answer_seq: ' + answer_sequence[0]);
          //$(".cell").off("board:squareClicked");
          that.restart();
        }

        if(_.isEmpty(answer_sequence)) {
          console.log('finished sequence!');
          //$(".cell").off("board:squareClicked");
          callback();
        }
      }, 500);
    });
    activeHandlers = true;
    }
    initialTime = null;
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
  that.step = function(board, callback) {
    addMove(board);
    board.publishChanges(_.clone(sequence), "green");
    callback();
  };

  that.tick = function() {
    var timeNow = Date.now();

    // On the first tick delta time should be 0.
    //var deltaTime = timeNow - (timer || timeNow);
    if (initialTime) {
      var deltaTime = (timeNow - initialTime);
    } else {
      initialTime = timeNow;
      var deltaTime = 0;
    }
    var seconds = (Math.floor(deltaTime/1000));
    var countdown = 10-seconds;
    if (countdown == 0) {
      that.restart();
    } else {
      that.draw(countdown);
    }
    // Schedule this.tick to be invoked again
    setTimeout(that.tick, 1000);
  };

  that.draw = function(deltaTime) {
    $("#timer").html(deltaTime);
  };
  return that;
};
