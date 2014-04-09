angular.module('newPokerclock.factories').factory('timer', ['levels', 'clock', function (levels, clock) {
  return {

    levels: levels.levels,

    currentLevel: levels.currentLevel,

    currentCount: clock.getCurrentCount,


    startGame: function () {
      console.log('start');
      clock.start();
    },

    pauseGame: function () {
      clock.stop();
    },

    resetGame: function () {
      levels.reset();
      clock.reset();
    },

    fastForward: function () {
      levels.makeNextLevelCurrent();
      clock.reset();
    },

    resetLevel: function () {
      clock.reset();
    },

    rewind: function () {
      levels.makePreviousLevelCurrent();
      clock.reset();
    },

    addLevel: function () {
      levels.addLevel();
    },

    removeLevel: function (levelNumber) {
      levels.removeLevel(levelNumber);
    },

  };
}]);
