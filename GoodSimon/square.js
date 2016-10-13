var Square = function() {
  that = {};
  that = Object.create(Square.prototype);
  var value= 0;
  var subscribers = [];

  /*
   * Subscribe a function to listen to the model.
   * @param{function}
   */
  that.subscribe = function(subscriber) {
    subscribers.push(subscriber);
  };

  /*
   * Unsubscribe a function to stop listening to the model.
   * Important to avoid memory leaks.
   * @param{function}
   */
  that.unsubscribe = function(subscriber) {
    var index = subscribers.indexOf(subscriber);
    if (index>-1) {
      subscribers.splice(index, 1);
    }
  };

  /*
   * Notify a particular subscriber.
   * @param{function}
   */
  var publishChange = function(subscriber) {
    var index = subscribers.indexOf(subscriber);
    if (index > -1) {
      subscribers[index]();
    }
  };

  /*
   * Notify all subscribers.
   */
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
