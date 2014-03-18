'use strict'

describe('Clock Controller', function () {

  beforeEach(function () {
    module('newPokerclock'),
    module('newPokerclock.controllers')
  });

  it('should have levels defined', inject(function ($controller) {
    var scope = {},
        ctrl = $controller('ClockController', { $scope: scope });

   expect(scope.levels).toBeDefined;
  }));

});
