angular.module('newPokerclock.factories').factory('levels', [function () {

  var level = function(number, value, time) {
    return {
      number: number,
      value: value,
      time: time
    }
  };

  var _levels = [
    level(1, 10, 900),
    level(2, 20, 900),
    level(3, 30, 900),
    level(4, 40, 900),
    level(5, 50, 900),
    level(6, 60, 900),
    level(7, 70, 900),
    level(8, 80, 900),
    level(9, 90, 900),
    level(10, 100, 900)];

  return {
    currentLevel: _levels[0],

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
      console.log('ME CHAMOU');
    },
  };
}]);
