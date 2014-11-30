'use strict';

describe('Controller: DemosMarsCtrl', function () {

  // load the controller's module
  beforeEach(module('hodgimotoApp'));

  var DemosMarsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemosMarsCtrl = $controller('DemosMarsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
