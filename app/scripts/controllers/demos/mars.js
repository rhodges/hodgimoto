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
      allOverlays: false
    });

    // var osm = new OpenLayers.Layer.OSM();
    var mars = new OpenLayers.Layer.OSM(
        'Mars',
        '/images/mars_tiles/Mapnik/${z}/${x}/${y}.png',
        {numZoomLevels: 9, isBaseLayer: true}
    );
    var gmap = new OpenLayers.Layer.Google(
      'Google Streets',
      {visibility: false, isBaseLayer: false}
    );

    // note that first layer must be visible
    $scope.map.addLayers([mars, gmap]);

    $scope.map.addControl(new OpenLayers.Control.LayerSwitcher());
    $scope.map.zoomToMaxExtent();

	// }
  });
