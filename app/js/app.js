'use strict';

angular.module('newPokerclock', ['newPokerclock.controllers', 'newPokerclock.factories'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
