angular.module('newPokerclock.directives').directive('timerDisplay', function () {
  return function (scope, elem, attrs) {
    var date = new Date(0, 0, 0, 0, 0, scope.count, 0);
  };
});
