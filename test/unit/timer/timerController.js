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
    console.log(scope.timer.levels);
    expect(scope.timer).toBeDefined();
  });

  it('should add a level', function () {
    spyOn(scope.timer, 'addLevel');
    scope.addLevel();
    expect(scope.timer.addLevel).toHaveBeenCalled();
  });

  it('should remove a level', function () {
    spyOn(scope.timer, 'removeLevel');

    scope.removeLevel(5);

    expect(scope.timer.removeLevel).toHaveBeenCalledWith(5);
  });

  it('should start game', function () {
    spyOn(scope.timer, 'startGame');

    scope.startGame();

    expect(scope.timer.startGame).toHaveBeenCalled();
  });

  it('should pause the game', function () {
    spyOn(scope.timer, 'pauseGame');

    scope.pauseGame();

    expect(scope.timer.pauseGame).toHaveBeenCalled();
  });

  it('should reset the level', function () {
    spyOn(scope.timer, 'resetLevel');

    scope.resetLevel();

    expect(scope.timer.resetLevel).toHaveBeenCalled();
  });

  it('should reset the game', function () {
    spyOn(scope.timer, 'resetGame');

    scope.resetGame();

    expect(scope.timer.resetGame).toHaveBeenCalled();
  });

  it('should fast forward a level', function () {
    spyOn(scope.timer, 'fastForward');

    scope.fastForward();

    expect(scope.timer.fastForward).toHaveBeenCalled();
  });

  it('should rewind a level', function () {
    spyOn(scope.timer, 'rewind');

    scope.rewind();

    expect(scope.timer.rewind).toHaveBeenCalled();
  });
});
