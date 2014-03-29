angular.module('newPokerclock.factories').factory('clock', ['$timeout', function ($timeout) {
  return (function () {
    var _currentCount = 900;
    var timeoutFunction;

    var tick = function () {
      _currentCount = _currentCount - 1;
      timeoutFunction = startClock();
      console.log('COUNT: ' + _currentCount);
    };

    var startClock = function () {
      return $timeout(tick, 1000);
    };

    return {
      setTime: function (time) { _currentCount = time; },

      getCurrentCount: function () {
        return _currentCount;
      },

      start: startClock,

      stop: function () {
        $timeout.cancel(timeoutFunction);
      }

    };
  }());
}]);
