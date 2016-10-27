var SquareWidget = function(domContainer, square) {
  var squareWidget = $(document.createElement("div")).css({
    'display': 'block',
    "width": "100px",
        "height": "100px",
        "border": "1px solid black",
        "background-color": "white"
      });

  domContainer.append(squareWidget);

  //var updateCounter = function() {
    //console.log('updateCounter called');
    //squareWidget.html(square.getValue());
  //};

  //var changeColor = function() {
    //console.log('updateCounter called');
    //squareWidget.css('background-color', 'yellow');
  //};

  //square.subscribe(function() {
    //updateCounter();
    //changeColor();
  //});
};
