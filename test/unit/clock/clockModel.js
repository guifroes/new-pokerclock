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
});
