var BoardWidget = function(domContainer) {
  var perimeter = 251.2;
  var colors = ['blue', 'green', 'red', 'yellow'];

  var boardWidget = $(document.createElement("svg")).css({
    width:"100%",
    height:"100%",
    viewBox:"0 0 100 100",
  });

  var buttonWidget = function(lo, hi, color) {
    return $(document.createElement("circle")).css({
      cx:"50",
      cy:"50",
      r:"40",
      fill:"transparent",
      'stroke-width':"20",
      stroke:color,
      'stroke-dasharray':hi,
      'stroke-dashoffset':lo,
    });
  };

  for(i=0;i<4;i++) {
    boardWidget.append(buttonWidget(perimeter*(i/4), perimeter*((i+1)/4), colors[i]));
  }
  $('body').append(boardWidget); //NOT CURRENTLY WORKING

  //var updateCounter = function() {
    //console.log('updateCounter called');
    //squareWidget.html(square.getValue());
  //};

  //var changeColor = function() {
    //console.log('updateCounter called');
    //squareWidget.css('background-color', 'yellow');
  //};

  //board.subscribe(function() {
    ////updateCounter();
    ////changeColor();
  //});
};
