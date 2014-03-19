angular.module('newPokerclock.controllers').controller('ClockController', ['$scope', 'levels', function ($scope, levels) {

  $scope.addLevel = function () {
    levels.addLevel();
  };
}]);
