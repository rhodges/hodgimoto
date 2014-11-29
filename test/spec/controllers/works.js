'use strict';

describe('Controller: WorksCtrl', function () {

  // load the controller's module
  beforeEach(module('hodgimotoApp'));

  var WorksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorksCtrl = $controller('WorksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
