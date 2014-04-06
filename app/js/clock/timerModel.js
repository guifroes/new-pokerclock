angular.module('newPokerclock.factories').factory('timer', ['levels', 'clock', function (levels, clock) {
  return {
    levels: levels,

    clock: clock,

    startGame: function () {
      this.clock.start();
    },

    pauseGame: function () {
      this.clock.stop();
    },

    resetGame: function () {
      this.levels.reset();
      this.clock.reset();
    }
  };
}]);
