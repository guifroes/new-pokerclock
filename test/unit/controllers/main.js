'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('newPokerclock.controllers'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.gameName).toBe('My awesome poker game');
  });

  it('should have levels', function() {
    expect(scope.levels).toBeDefined();
  })

  it('should have levels number, blinds and time', function(){
    expect(scope.levels[0].number).toBeDefined;
    expect(scope.levels[0].blinds).toBeDefined;
    expect(scope.levels[0].time).toBeDefined;
  })

  it('should change the button caption when clicked', function() {
    expect(scope.buttonCaption).toBe('Start game');

    scope.stop();

    expect(scope.buttonCaption).toBe('Stop game');
  })

  it('should start at level 0', function() {
    expect(scope.currentLevel.number).toBe(0);
  })

  it('should have initial time equal to first level time', function() {
    expect(scope.time).toEqual(new Date(0, 0, 0, 0, 0, scope.levels[0].time, 0));
  })

  it('should go to level 1 when first started', function() {
    scope.stop();

    expect(scope.currentLevel.number).toBe(1);
    expect(scope.currentLevel.blinds).toBe('25/50');
    expect(scope.currentLevel.time).toBe(900);
    expect(scope.currentLevel.ante).toBe(0);
  })

  it('should add a level', function() {
    var previousNumberOfLevels = scope.levels.length;

    scope.addLevel();

    var currentNumberOfLevels = scope.levels.length;

    expect(currentNumberOfLevels).toBe(previousNumberOfLevels + 1);
  })


});
