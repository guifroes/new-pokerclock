'use strict'

describe('ClockModel', function () {

  var clock = {};
  var $timeout = {};

  beforeEach(function () {
    module('newPokerclock.factories');

    inject(function (_clock_, _$timeout_) {
      clock = _clock_;
      $timeout = _$timeout_;
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

});
