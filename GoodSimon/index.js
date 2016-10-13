(function() {
  document.addEventListener('DOMContentLoaded', function () {
    // $('body').append('<h2>Add</h2>');
    SquareWidget($('#squares'), Square());
    // $('body').prepend('<h2>Subtract</h2>');
    SquareWidget($('#squares'), Square());
  });
})();