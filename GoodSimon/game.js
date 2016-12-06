var Game = function(boardWidget) {
  that = {};
  var initialTime = null;
  //setTimeout(that.tick.bind(that), 0);
  var sequence = [];
  //var activeHandlers = false;
  var widget = boardWidget;
  var timer = false;

  that.getWidget = function() {
    return widget;
  }
  that.start = function(board) {
    setTimeout(that.tick, 0);
    that.step(board, function() {
      that.awaitUserAnswer(function() {that.start(board);});
    });
  };

  /*
   * Resets the game by refreshing the page
   */
  that.restart = function() {
    alert('game over!');
    document.location.href = "";
  };

  /*
   * Click handlers go on and off as player's turn starts and ends
   * Handler needs to be constantly updated, otherwise uses old info
   */
  that.awaitUserAnswer = function(callback) {
    console.log('started user mode');
    $('#timer').css('background-color', 'red');
    timer = true;
    //setTimeout(that.tick, 0);
    answer_sequence = _.clone(sequence);

    activeHandlers = true;
    $(".cell").on('board:squareClicked', function(e, x, y) {
      //if (activeHandlers) {
      console.log('clicked');
      console.log([x, y]);

      var cellRef = $(this);
      cellRef.css("background-color", "red");
      setTimeout(function() {
        cellRef.css("background-color", "white");
        if(_.isEqual(answer_sequence[0], [x, y])) {
          answer_sequence.shift();
          console.log('good job!');
        } else {
          console.log('answer_seq: ' + answer_sequence[0]);
          that.restart();
        }

        if(_.isEmpty(answer_sequence)) {
          timer = false;
          initialTime = null;
          console.log('finished sequence!');
          console.log('finished user mode');
          $(".cell").off("board:squareClicked");
          //activeHandlers = false;
          callback();
        }
      }, 500);
      //}
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
  that.step = function(board, callback) {
    console.log('started computer mode');
    $('#timer').css('background-color', 'green');
    addMove(board);
    widget.blinkList(_.clone(sequence), 0, "green", callback);
    //board.publishChanges(_.clone(sequence), "green");
  };

  that.tick = function() {
    if (timer) {
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
      that.draw(countdown);
      if (countdown == 0) {
        that.restart();
      }
      // Schedule this.tick to be invoked again
      //var again = setTimeout(that.tick, 1000);
    } else {
      that.draw("computer's turn");
    }
    var again = setTimeout(that.tick, 1000);
  };

  that.draw = function(deltaTime) {
    $("#timer").html(deltaTime);
  };
  return that;
};
