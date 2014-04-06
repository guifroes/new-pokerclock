angular.module('newPokerclock.controllers').controller('TimerController', ['$scope', 'timer', function ($scope, timer) {

  $scope.timer = timer;

  $scope.addLevel = function () {
    timer.addLevel();
  };

  $scope.removeLevel = function (number) {
    timer.removeLevel(number);
  };

  $scope.startGame = function () {
    timer.startGame();
  };

  $scope.pauseGame = function () {
    timer.pauseGame();
  };

  $scope.resetLevel = function () {
    timer.resetLevel();
  };

  $scope.resetGame = function () {
    timer.resetGame();
  };

  $scope.fastForward = function () {
    timer.fastForward();
  };

  $scope.rewind = function () {
    timer.rewind();
  };
}]);
