'use strict'

describe('ClockModel', function () {

  var clock = {
    name: "Guilherme",
    levels: [
  'level',
  'level',
  'level',
  'level',
  'level',
  'level',
  'level',
  'level',
  'level',
  'level'
      ]
  };
  it('should have a clock', function () {
    expect(clock.name).toBe("Guilherme");
  });

  it('should have 10 levels by default', function () {
    expect(clock.levels.length).toBe(10);
  });
});
