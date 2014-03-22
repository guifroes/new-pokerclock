angular.module('newPokerclock.controllers').controller('ClockController', ['$scope', 'levels', function ($scope, levels) {

  $scope.levels = levels.levels;
  $scope.name = "kkkkkk";
  $scope.addLevel = function () {
    levels.addLevel();
  };

  $scope.removeLevel = function(number) {
    levels.removeLevel(number);
  };
}]);
