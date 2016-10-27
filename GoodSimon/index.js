(function() {
  document.addEventListener('DOMContentLoaded', function () {
    $('button').click(function() {
      var difficulty = $(this).attr('value');
      if (difficulty==='easy') {
        x = 3;
      } else if (difficulty==='medium') {
        x = 6;
      } else {
        x = 9;
      }
    var board = Board(x,x);
    BoardWidget($('#board'), board, x, x);
    $('#options').hide();
    })

    //SquareWidget($('#board'), Square());
    //BoardWidget($('#board'), 10, 10);
    //BoardWidget();
    //$('.button').click(function() {
      //var type = $(this).id;
      //var sound = $('#audio')[0];
      //sound.play();
      //$(this).css('stroke', 'black');
    //});
    //$('#blue').click(function() {
      //var sound = $('#blueAudio')[0];
      //sound.play();
      //$(this).css('stroke', 'grey');
    //});
    //$('#green').click(function() {
      //var sound = $('#greenAudio')[0];
      //sound.play();
      //$(this).css('stroke', 'black');
    //});
    //$('#red').click(function() {
      //var sound = $('#redAudio')[0];
      //sound.play();
      //$(this).css('stroke', 'brown');
    //});
    //$('#yellow').click(function() {
      //var sound = $('#yellowAudio')[0];
      //sound.play();
      //$(this).css('stroke', 'orange');
    //});
  });
})();
