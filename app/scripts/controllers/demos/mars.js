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

    $scope.map = new OpenLayers.Map({
      div: 'map',
      allOverlays: false
    });

    var mars = new OpenLayers.Layer.OSM(
        'Mars',
        '/images/mars_tiles/Mapnik/${z}/${x}/${y}.png',
        {numZoomLevels: 9, isBaseLayer: true, attribution:''}
    );

    // note that first layer must be visible
    $scope.map.addLayers([mars]);

    // $scope.map.addControl(new OpenLayers.Control.LayerSwitcher());
    $scope.map.zoomToMaxExtent();

	// }
  });
