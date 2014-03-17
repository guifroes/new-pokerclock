'use strict'

var newPokerclock = newPokerclock || {};
newPokerclock.model = newPokerclock.model || {};

var level = newPokerclock.model.Level;

newPokerclock.model.LevelsSet = function () {
  var _levels = [
    new level(1, 10, 900),
    new level(2, 20, 900),
    new level(3, 30, 900),
    new level(4, 40, 900),
    new level(5, 50, 900),
    new level(6, 60, 900),
    new level(7, 70, 900),
    new level(8, 80, 900),
    new level(9, 90, 900),
    new level(10, 100, 900)];

  return {
    levels: _levels,

    addLevel: function () {
      _levels.push(new level(1, 10, 900));
    },

    removeLevel: function (number) {
      for (var i = 0; i < _levels.length; i ++) {
        if (_levels[i].number == number) {
          _levels.splice(i, 1);
        }
      }
    }
  };
};
