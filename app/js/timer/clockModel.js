angular.module('newPokerclock.factories').factory('clock', ['$timeout', 'levels', function ($timeout, levels) {
  return (function () {
    var _currentCount = levels.currentLevel.time;
    var timeoutFunction;

    var tick = function () {
      _currentCount = _currentCount - 1;

      if(_currentCount < 0) {
        levels.makeNextLevelCurrent();
        _currentCount = levels.currentLevel.time;
        console.log("mudou pra level", levels.currentLevel.number);
      }

      timeoutFunction = startClock();
    };

    var startClock = function () {
      return $timeout(tick, 1000);
    };

    return {
      levels: levels,
      setTime: function (time) { _currentCount = time; },

      getCurrentCount: function () {
        return _currentCount;
      },

      start: startClock,

      stop: function () {
        $timeout.cancel(timeoutFunction);
      },

      reset: function () {
        _currentCount = this.levels.currentLevel.time;
      }

    };
  }());
}]);
