describe('Timer Controller', function () {

  beforeEach(function () {
    module('newPokerclock.controllers');
    module('newPokerclock.factories');

    var timer = {};

    inject(function ($rootScope, $controller, _timer_) {
      scope = $rootScope.$new;
      timer = _timer_;
      ctrl = $controller('TimerController', { $scope: scope, timer: timer });
    });

  });

  it('should have a timer', function () {
    expect(scope.timer).toBeDefined();
  });

});
