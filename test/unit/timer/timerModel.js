'use strict'

describe('Timer model', function () {

  var timer = {};

  beforeEach(function () {
    module('newPokerclock.factories');

    inject(function (_timer_, _levels_, _clock_) {
      timer = _timer_;
      timer.levels = _levels_;
      timer.clock = _clock_;
    });
  });

  it('should have first level as current when game starts', function () {
    timer.startGame();
    expect(timer.levels.getCurrentLevel().number).toEqual(1);
  });

  it('should start the clock when start game', function () {
    spyOn(timer.clock, 'start');
    timer.startGame();
    expect(timer.clock.start).toHaveBeenCalled();
  });

  it('should pause the game', function () {
    spyOn(timer.clock, 'stop');
    timer.pauseGame();
    expect(timer.clock.stop).toHaveBeenCalled();
  });

  it('should reset the game', function () {
    spyOn(timer.levels, 'reset');
    spyOn(timer.clock, 'reset');

    timer.resetGame();

    expect(timer.levels.reset).toHaveBeenCalled();
    expect(timer.clock.reset).toHaveBeenCalled();
  });

  it('should add a level', function () {
    spyOn(timer.levels, 'addLevel');

    timer.addLevel();

    expect(timer.levels.addLevel).toHaveBeenCalled();
  });

  it('should remove a level', function () {
    spyOn(timer.levels, 'removeLevel');

    timer.removeLevel(5);

    expect(timer.levels.removeLevel).toHaveBeenCalledWith(5);
  });

  it('should fast forward level', function () {
    spyOn(timer.levels, 'makeNextLevelCurrent');
    spyOn(timer.clock, 'reset');

    timer.fastForward();

    expect(timer.levels.makeNextLevelCurrent).toHaveBeenCalled();
    expect(timer.clock.reset).toHaveBeenCalled();
  });

  it('should reset level', function () {
    spyOn(timer.clock, 'reset');

    timer.resetLevel();

    expect(timer.clock.reset).toHaveBeenCalled();
  });

  it('should rewind level', function () {
    spyOn(timer.levels, 'makePreviousLevelCurrent');
    spyOn(timer.clock, 'reset');

    timer.rewind();

    expect(timer.levels.makePreviousLevelCurrent).toHaveBeenCalled();
    expect(timer.clock.reset).toHaveBeenCalled();
  });

  it('should expose the current level', function () {
    expect(timer.getCurrentLevel).toBeDefined();
  });

  it('should expose the levels', function () {
    expect(timer.levels).toBeDefined();
  });
  
  it('should expose clocks current count', function () {
    expect(timer.getCurrentCount).toBeDefined();
  });
});
