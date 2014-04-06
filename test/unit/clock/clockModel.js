'use strict'

describe('ClockModel', function () {

  var clock = {};
  var $timeout = {};

  beforeEach(function () {
    module('newPokerclock.factories');

    inject(function (_clock_, _$timeout_, _levels_) {
      clock = _clock_;
      $timeout = _$timeout_;
      levels = _levels_;
    })
    clock.setTime(777);
  });

  it('should have a current time count', function() {
    expect(clock.getCurrentCount()).toBeDefined();
  });

  it('should tick when timer is started', function () {
    var previousCount = clock.getCurrentCount();

    clock.start();
    $timeout.flush();

    var subsequentCount = clock.getCurrentCount();

    expect(subsequentCount).toEqual(previousCount - 1);
  });

  it('should tick only once when timer is stoped', function () {
    var previousCount = clock.getCurrentCount();

    clock.start();
    clock.stop();
    $timeout.flush();

    var subsequentCount = clock.getCurrentCount();

    expect(subsequentCount).toEqual(previousCount - 1);
  });

  it('should tick 3 times than stop', function () {
    var previousCount = clock.getCurrentCount();

    clock.start();
    $timeout.flush();
    $timeout.flush();
    $timeout.flush();
    clock.stop();

    var subsequentCount = clock.getCurrentCount();

    expect(subsequentCount).toEqual(previousCount - 3);

  });

  it('should have levels', function () {
    expect(clock.levels).toBeDefined();
  });

  it('should NOT make the next level current if count is not zero', function () {
    spyOn(levels, 'makeNextLevelCurrent');

    clock.setTime(1);
    clock.start();
    $timeout.flush();

    expect(levels.makeNextLevelCurrent).not.toHaveBeenCalled();
  });

  it('should make the next level current after count reaches zero', function () {
    spyOn(levels, 'makeNextLevelCurrent');

    clock.setTime(0);
    clock.start();
    $timeout.flush();

    expect(levels.makeNextLevelCurrent).toHaveBeenCalled();
  });

  it('should have the next level time as count when change levels', function () {
    clock.setTime(0);
    clock.start();
    $timeout.flush();

    var currentLevelTime = levels.currentLevel.time;
    expect(clock.getCurrentCount()).toEqual(currentLevelTime);
  });
});
