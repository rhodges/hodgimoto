'use strict';

describe('Controller: DemosCtrl', function () {

  // load the controller's module
  beforeEach(module('hodgimotoApp'));

  var DemosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemosCtrl = $controller('DemosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
