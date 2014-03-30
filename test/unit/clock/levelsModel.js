'use strict'

describe('LevelsModel', function () {

  var levelsSet = {};

  beforeEach(function () {
    module('newPokerclock.factories');

    inject(function(_levels_, _clock_) {
      levelsSet = _levels_;
      levelsSet.clock = _clock_;
    });
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

    expect(levelsSet.levels.length).toEqual(previousNumberOfLevels + 1);
  });

  it('when adding a level, the new level has to have bigger number and value', function () {
    var lastLevel = levelsSet.levels[levelsSet.levels.length - 1];

    levelsSet.addLevel();

    var newLevel = levelsSet.levels[levelsSet.levels.length - 1];

    expect(newLevel.number).toBeGreaterThan(lastLevel.number);
    expect(newLevel.value).toBeGreaterThan(lastLevel.value);
  });

  it('should remove a level', function () {
    var previousNumberOfLevels = levelsSet.levels.length;

    levelsSet.removeLevel(5);

    expect(levelsSet.levels.length).toEqual(previousNumberOfLevels - 1);
  });

  it('should have a clock', function () {
    expect(levelsSet.clock).toBeDefined();
  });

  it('should have the first level as current when created', function () {
    expect(levelsSet.currentLevel.number).toEqual(1);
  });

  it('the clock time should be the current level time', function () {
    expect(levelsSet.clock.getCurrentCount()).toEqual(levelsSet.currentLevel.time);
  });

  it('should start the clock', function () {
    spyOn(levelsSet.clock, 'start');
    levelsSet.startClock();

    expect(levelsSet.clock.start).toHaveBeenCalled();
  });

  it('when a level time gets to zero, the next level should be the current', function () {
    levelsSet.clock.setTime(1);

    
  });

});
