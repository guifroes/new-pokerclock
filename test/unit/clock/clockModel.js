'use strict'

describe('ClockModel', function () {
 
  var clock = {};

  beforeEach(function () {
    module('newPokerclock.factories');

    inject(function(_clock_) {
      clock = _clock_;
    })
  });

  it('should have a current time count', function() {
    expect(clock.currentCount).toBeDefined();
  });

  it('should tick', function () {
    var previousCount = clock.currentCount;

    clock.tick();

    var subsequentCount = clock.currentCount;

    expect(subsequentCount).toEqual(previousCount - 1);
  });
});
