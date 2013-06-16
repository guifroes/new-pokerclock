'use strict';

angular.module('newPokerclockApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    var startTimer = function(){
      return $timeout($scope.onTimeout, 1000);
    }

    $scope.gameName = 'My awesome poker game';
    $scope.gameStarted = false;
    $scope.buttonCaption = 'Start game';
    $scope.levels = [{number: 1, blinds: "25/50", time: 750},
                    {number: 2, blinds: "50/75", time: 750},
                    {number: 3, blinds: "75/100", time: 750},
                    {number: 4, blinds: "100/200", time: 750}];

    $scope.currentLevel = {number: 0};

    var counter = 333;
    $scope.onTimeout = function(){
      counter--;
      $scope.time = new Date(0, 0, 0, 0, 0, counter, 0);
      mytimeout = startTimer();
    }

    var mytimeout;

    var stopTimer = function() {
      $timeout.cancel(mytimeout);
    }

    var getNextLevel = function() {
      var level = $scope.currentLevel;
      console.log(level);
      return $scope.levels[level.number];
    }

    $scope.stop = function() {
      if($scope.gameStarted) {
        stopTimer();
        $scope.gameStarted = false;
        $scope.buttonCaption = 'Star game';
      }
      else {
        if($scope.currentLevel.number === 0) {
          $scope.currentLevel = getNextLevel();
        }
        $scope.gameStarted = true;
        mytimeout = startTimer();
        $scope.buttonCaption = 'Stop game';
      }
    }
    
});
