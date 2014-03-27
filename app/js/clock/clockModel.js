angular.module('newPokerclock.factories').factory('clock', [function () {
  var _currentCount = 900;
  return {
    currentCount: _currentCount,
    tick: function () {
      this.currentCount = this.currentCount - 1;
    }
  };
}]);
