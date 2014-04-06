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

});
