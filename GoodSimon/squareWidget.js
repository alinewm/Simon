var SquareWidget = function(domContainer, square) {
  var squareWidget = $(document.createElement("div")).html(square.getValue()).css({
    'display': 'block',
    'border': '5px solid red',
    "width": "100px",
        "height": "100px",
        "border": "1px solid black",
        "background-color": "white"
      }).click(function() {
        square.add(1);
      });

  domContainer.append(squareWidget);

  var updateCounter = function() {
    console.log('updateCounter called');
    squareWidget.html(square.getValue());
  };

  var changeColor = function() {
    console.log('updateCounter called');
    squareWidget.css('background-color', 'yellow');
  };

  square.subscribe(function() {
    updateCounter();
    changeColor();
  });
};