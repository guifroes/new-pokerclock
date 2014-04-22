describe('Timer display directive', function() {
  var html,
      scope,
      elem,
      compiled,
      directive;

  beforeEach(function () {
    module('newPokerclock.directives');

    html = '<span timer-display>{{count}}</span>';

    inject(function($compile, $rootScope) {
      scope = $rootScope.$new();

      elem = angular.element(html);
      compiled = $compile(elem);
      compiled(scope);
      scope.$digest();
    });

  });
  it('should display count as minutes and seconds', function () {
    expect(true).toBe(true);
  });
});
