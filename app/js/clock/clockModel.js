angular.module('newPokerclock.factories').factory('clock', [function () {
  var _currentCount = 900;
  return {
    currentCount: function () {
                    return _currentCount;
                  },
    tick: function () {
      _currentCount = _currentCount - 1;
    }
  };
}]);
