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
    expect(timer.levels.currentLevel.number).toEqual(1);
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

});
