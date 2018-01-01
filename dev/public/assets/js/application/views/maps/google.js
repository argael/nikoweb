(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';
      var default_map, style, styled_map;
      style = [
        {
          'featureType': 'all',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': colors['white']
            }
          ]
        }, {
          'featureType': 'all',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'visibility': 'on'
            }, {
              'color': colors['black']
            }, {
              'lightness': 0
            }
          ]
        }, {
          'featureType': 'all',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        }, {
          'featureType': 'administrative',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': colors['concrete']
            }, {
              'lightness': 20
            }
          ]
        }, {
          'featureType': 'administrative',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': colors['primary']
            }, {
              'weight': 1.2
            }
          ]
        }, {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': colors['concrete']
            }
          ]
        }, {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': colors['black']
            }
          ]
        }, {
          'featureType': 'road',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': colors['primary']
            }
          ]
        }, {
          'featureType': 'road.highway',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': colors['primary']
            }, {
              'lightness': '20'
            }
          ]
        }, {
          'featureType': 'transit',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': colors['primary']
            }, {
              'lightness': 19
            }
          ]
        }, {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': colors['asphalt']
            }
          ]
        }
      ];
      default_map = new GMaps({
        el: '#gmaps-default',
        lat: -33.8688,
        lng: 151.2093,
        zoom: 13
      });
      styled_map = new GMaps({
        el: '#gmaps-styled',
        lat: -33.8688,
        lng: 151.2093,
        zoom: 13
      });
      styled_map.addStyle({
        styledMapName: "Volta",
        styles: style,
        mapTypeId: "volta"
      });
      styled_map.setStyle("volta");
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/maps/google.js.map
