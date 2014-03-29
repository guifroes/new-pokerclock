angular.module('newPokerclock.factories').factory('clock', ['$timeout', function ($timeout) {
  return (function () {
    var _currentCount = 900;

    var tick = function () {
      _currentCount = _currentCount - 1;
      console.log('COUNT: ' + _currentCount);
    };

    return {
      setTime: function (time) { _currentCount = time; },
      getCurrentCount: function () {
                      return _currentCount; 
                    },

      start: function () {
        return $timeout(tick, 1000);
      }
    };
  }());
}]);
