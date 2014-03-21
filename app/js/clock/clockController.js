angular.module('newPokerclock.controllers').controller('ClockController', ['$scope', 'levels', function ($scope, levels) {

  $scope.levels = levels.levels;
  $scope.name = "hhhh";
  $scope.addLevel = function () {
    levels.addLevel();
  };
}]);
