'use strict';
if (false) {
  var ol=null;
  var google=null;
}

/**
 * @ngdoc function
 * @name hodgimotoApp.controller:DemosMarsCtrl
 * @description
 * # DemosMarsCtrl
 * Controller of the hodgimotoApp
 */
angular.module('hodgimotoApp')
  .controller('DemosMarsCtrl', function ($scope) {
    // var styles = [
    //   'Road',
    //   'Aerial',
    //   'AerialWithLabels',
    //   'collinsBart',
    //   'ordnanceSurvey'
    // ];
    // var layers = [];
    // var i, ii;
    // for (i = 0, ii = styles.length; i < ii; ++i) {
    //   layers.push(new ol.layer.Tile({
    //     visible: false,
    //     preload: Infinity,
    //     source: new ol.source.BingMaps({
    //       key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3',
    //       imagerySet: styles[i]
    //     })
    //   }));
    // }


    var exampleNS = {};

    exampleNS.getRendererFromQueryString = function() {
      var obj = {};
      var queryString = location.search.slice(1);
      var re = /([^&=]+)=([^&]*)/g;
      var m;

      while (m = re.exec(queryString)) {
        obj[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
      if ('renderers' in obj) {
        return obj.renderers.split(',');
      } else if ('renderer' in obj) {
        return [obj.renderer];
      } else {
        return undefined;
      }
    };

    $scope.gmap = new google.maps.Map(document.getElementById('gmap'), {
      disableDefaultUI: true,
      keyboardShortcuts: false,
      draggable: false,
      disableDoubleClickZoom: true,
      scrollwheel: false,
      streetViewControl: false
    });

    var view = new ol.View({
      // make sure the view doesn't go beyond the 22 zoom levels of Google Maps
      maxZoom: 21
    });
    view.on('change:center', function() {
      var center = ol.proj.transform(view.getCenter(), 'EPSG:3857', 'EPSG:4326');
      $scope.gmap.setCenter(new google.maps.LatLng(center[1], center[0]));
    });
    view.on('change:resolution', function() {
      $scope.gmap.setZoom(view.getZoom());
    });

    // var vector = new ol.layer.Vector({
    //   source: new ol.source.GeoJSON({
    //     url: 'data/geojson/countries.geojson',
    //     projection: 'EPSG:3857'
    //   }),
    //   style: new ol.style.Style({
    //     fill: new ol.style.Fill({
    //       color: 'rgba(255, 255, 255, 0.6)'
    //     }),
    //     stroke: new ol.style.Stroke({
    //       color: '#319FD3',
    //       width: 1
    //     })
    //   })
    // });

    // var olMapDiv = document.getElementById('olmap');
    // var map = new ol.Map({
    //   // layers: [vector],
    //   layers: [],
    //   interactions: ol.interaction.defaults({
    //     altShiftDragRotate: false,
    //     dragPan: false,
    //     rotate: false
    //   }).extend([new ol.interaction.DragPan({kinetic: null})]),
    //   target: olMapDiv,
    //   view: view
    // });
    // view.setCenter([0, 0]);
    // view.setZoom(1);

    // olMapDiv.parentNode.removeChild(olMapDiv);
    // $scope.gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(olMapDiv);
  });
