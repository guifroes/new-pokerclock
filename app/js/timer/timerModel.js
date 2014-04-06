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
    },

    fastForward: function () {
      this.levels.makeNextLevelCurrent();
      this.clock.reset();
    },

    resetLevel: function () {
      this.clock.reset();
    },

    rewind: function () {
      this.levels.makePreviousLevelCurrent();
      this.clock.reset();
    }
  };
}]);
