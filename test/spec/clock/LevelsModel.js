'use strict'

describe('LevelsModel', function () {

  var levelsSet = {};
  beforeEach(function () {
    levelsSet = new newPokerclock.model.LevelsSet();
  });

  it('should have 10 levels by default', function () {
    expect(levelsSet.levels.length).toBe(10);
  });

  it('each level should have number, value and time', function () {
    levelsSet.levels.forEach(function (level) {
      expect(level.number).toBeDefined();
      expect(level.value).toBeDefined();
      expect(level.time).toBeDefined();
    })
  });

  it('each level should have bigger number, value and same time as previous', function () {
    for(var i = 0; i < levelsSet.levels.length - 1; i++) {
      var previousNumber = levelsSet.levels[i].number;
      var number = levelsSet.levels[i + 1].number;

      expect(previousNumber < number).toBe(true);

      var previousValue = levelsSet.levels[i].value;
      var value = levelsSet.levels[i + 1].value;

      expect(previousValue < value).toBe(true);
    }
  });

  it('should add a level', function () {
    var previousNumberOfLevels = levelsSet.levels.length;

    levelsSet.addLevel();

    expect(levelsSet.levels.length).toBe(previousNumberOfLevels + 1);
  });

  it('should remove a level', function () {
    var previousNumberOfLevels = levelsSet.levels.length;

    levelsSet.removeLevel(5);

    expect(levelsSet.levels.length).toBe(previousNumberOfLevels - 1);
  });
});
