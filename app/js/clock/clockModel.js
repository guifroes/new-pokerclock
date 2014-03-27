angular.module('newPokerclock.factories').factory('clock', [function () {
  this._currentCount = 900;
  return {
    currentCount: this._currentCount,
    tick: function () {
      this._currentCount = this._currentCount - 1;
    }
  };
}]);
