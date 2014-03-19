describe('Clock Controller', function () {

  beforeEach(function () {
    module('newPokerclock.controllers')

    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new;
      levels = { addLevel: function () {} };
      ctrl = $controller('ClockController', { $scope: scope, levels: levels });
    });

    spyOn(levels, 'addLevel');
  });

  it('should have levels defined', inject(function ($controller) {
    expect(scope.levels).toBeDefined;
  }));

  it('should add a level', function () {
    scope.addLevel();
    expect(levels.addLevel).toHaveBeenCalled();
  });

});
