'use strict'

describe('Timer model', function () {

  var timer = {};

  beforeEach(function () {
    module('newPokerclock.factories');

    inject(function (_timer_) {
      timer = _timer_;
    });
  });

  it('should test', function () {
    expect(true).toEqual(true);
  });
});
