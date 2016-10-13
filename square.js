var Square = function() {
  that = {};
  that = Object.create(Square.prototype);
  var value= 0;
  var subscribers = [];

  that.subscribe = function(subscriber) {
    subscribers.push(subscriber);
  };

  var publishChanges = function() {
    subscribers.forEach(function(subscriber) { subscriber(); });
  };

  that.add = function(toAdd) {
    value += 1;
    console.log(value);
    publishChanges();
  }

  that.subtract = function(toSub) {
    return value--;
    console.log(value);
    publishChanges();
  }

  that.getValue = function() {
    return value;
  }

  Object.freeze(that);
  return that;
};