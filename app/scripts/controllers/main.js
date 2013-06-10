'use strict';

angular.module('newPokerclockApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    var startTimer = function(){
      return $timeout($scope.onTimeout, 1000);
    }

    $scope.gameName = 'My awesome poker game';
    $scope.gameStarted = true;

    var counter = 333;
    $scope.onTimeout = function(){
      counter--;
      $scope.time = new Date(0, 0, 0, 0, 0, counter, 0);
      mytimeout = startTimer();
    }

    var mytimeout = startTimer();

    var stopTimer = function() {
      $timeout.cancel(mytimeout);
    }

    $scope.stop = function(){
      if($scope.gameStarted){
        stopTimer();
        $scope.gameStarted = false;
      }
      else {
        $scope.gameStarted = true;
        mytimeout = startTimer();
      }
    }
});
