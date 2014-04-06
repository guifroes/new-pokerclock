describe('Clock Controller', function () {

  beforeEach(function () {
    module('newPokerclock.controllers')

    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new;
      levels = { 
        addLevel: function () {},
        removeLevel: function (number) {}
      };
      ctrl = $controller('ClockController', { $scope: scope, levels: levels });
    });

  });

  it('should have levels defined', inject(function ($controller) {
    expect(scope.levels).toBeDefined;
  }));

  it('should add a level', function () {
    spyOn(levels, 'addLevel');
    scope.addLevel();
    expect(levels.addLevel).toHaveBeenCalled();
  });

  it('should remove a level', function () {
    spyOn(levels, 'removeLevel');

    scope.removeLevel(5);

    expect(levels.removeLevel).toHaveBeenCalledWith(5);
  });

});
