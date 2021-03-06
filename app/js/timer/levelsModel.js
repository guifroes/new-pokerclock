angular.module('newPokerclock.factories').factory('levels', [function () {

  var level = function(number, value, time) {
    return {
      number: number,
      value: value,
      time: time
    }
  };

  var _levels = [
    level(1, 10, 20),
    level(2, 20, 20),
    level(3, 30, 900),
    level(4, 40, 900),
    level(5, 50, 900),
    level(6, 60, 900),
    level(7, 70, 900),
    level(8, 80, 900),
    level(9, 90, 900),
    level(10, 100, 900)];

  var _currentLevel = _levels[0];

  return {
    getCurrentLevel: function () {
                    return _currentLevel;
                  },

    levels: _levels,

    addLevel: function () {
      var lastLevel = _levels[_levels.length - 1];
      _levels.push(new level(lastLevel.number + 1, lastLevel.value * 2, 900));
    },

    removeLevel: function (number) {
      for (var i = 0; i < _levels.length; i ++) {
        if (_levels[i].number == number) {
          _levels.splice(i, 1);
        }
      }
    },

    makeNextLevelCurrent: function () {
      var currentLevelIndex = this.levels.indexOf(_currentLevel);
      _currentLevel = this.levels[currentLevelIndex + 1];
    },

    makePreviousLevelCurrent: function () {
      var currentLevelIndex = this.levels.indexOf(_currentLevel);
      _currentLevel = this.levels[currentLevelIndex - 1];
    },

    reset: function () {
      this.currentLevel = _levels[0];
    },
  };
}]);
