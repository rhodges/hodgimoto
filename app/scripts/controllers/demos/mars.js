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

    // OpenLayers.Util.onImageLoadError = function() {
    //     this.src = '/images/mars_tiles/blank.png';
    // };
    // OpenLayers.Util.onImageLoadErrorColor = "transparent";

    var marsProjection = new OpenLayers.Projection('+proj=longlat +a=3396190 +b=3396190 +no_defs');
    var cubProjection = new OpenLayers.Projection('+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=3396190 +b=3396190 +units=m +no_defs');

    var mars = new OpenLayers.Layer.OSM(
        'Mars',
        'https://cdn.rawgit.com/rhodges/mars_tiles/master/MarsBase/${z}/${x}/${y}.png',
        {numZoomLevels: 9, isBaseLayer: true, attribution:''}
    );

    var landingListeners = {
        featureclick: function(e) {
            alert(e.feature.attributes.FULL_NAME + '\n' +
                e.feature.attributes.COUNTRY + '\n' +
                e.feature.attributes.YEAR + '\n' +
                e.feature.attributes.WEB_LINK);
            return false;
          }
      };

    var landingLayer = new OpenLayers.Layer.Vector('Landings', {
        projection: new OpenLayers.Projection('EPSG:4326'),
        strategies: [new OpenLayers.Strategy.Fixed()],
        protocol: new OpenLayers.Protocol.HTTP({
          url: '/layers/mars_landings.geojson',
          params: {},
          format: new OpenLayers.Format.GeoJSON({ignoreExtraDims: true}),
          callbackKey: 'callback'
        }),
        eventListeners: landingListeners
      });

    var structureLayer = new OpenLayers.Layer.Vector('Structure', {
        projection: new OpenLayers.Projection('EPSG:4326'),
        strategies: [new OpenLayers.Strategy.Fixed()],
        protocol: new OpenLayers.Protocol.HTTP({
          url: '/layers/mars_structure.geojson',
          params: {},
          format: new OpenLayers.Format.GeoJSON({ignoreExtraDims: true}),
          callbackKey: 'callback'
        })
      });

    $scope.map.addLayers([mars, landingLayer, structureLayer]);
    structureLayer.setVisibility(false);

    // var extent = mars.getExtent();
    // $scope.map.setOptions({restrictedExtent: extent});

    $scope.map.addControl(new OpenLayers.Control.LayerSwitcher());
    $scope.map.zoomToMaxExtent();

  });
