'use strict';

if (false) {var OpenLayers = null;}

/**
 * @ngdoc function
 * @name hodgimotoApp.controller:DemosMarsCtrl
 * @description
 * # DemosMarsCtrl
 * Controller of the hodgimotoApp
 */
angular.module('hodgimotoApp')
  .controller('DemosMarsCtrl', function ($scope) {
    // $scope.map;

	// function init() {
    $scope.map = new OpenLayers.Map({
      div: 'map',
      allOverlays: true
    });

    var osm = new OpenLayers.Layer.OSM();
    var mars = new OpenLayers.Layer.Google(
      'G_MARS_VISIBLE_MAP',
      {visibility: true}
    );
    var gmap = new OpenLayers.Layer.Google(
      'Google Streets',
      {visibility: false}
    );

    // note that first layer must be visible
    $scope.map.addLayers([osm, mars, gmap]);

    $scope.map.addControl(new OpenLayers.Control.LayerSwitcher());
    $scope.map.zoomToMaxExtent();

	// }
  });
