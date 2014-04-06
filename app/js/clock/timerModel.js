angular.module('newPokerclock.factories').factory('timer', ['levels', 'clock', function (levels, clock) {
  return {
    levels: levels,

    clock: clock,

    startGame: function () {
    }
  };
}]);
