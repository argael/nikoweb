(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';

      /*
      World
       */
      $('#vector-world').vectorMap({
        map: 'world_mill',
        backgroundColor: colors['concrete'],
        regionStyle: {
          initial: {
            fill: colors['primary'],
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: colors['secondary']
          }
        }
      });

      /*
      North America
       */
      $('#vector-north-america').vectorMap({
        map: 'north_america_mill',
        backgroundColor: colors['concrete'],
        regionStyle: {
          initial: {
            fill: colors['primary'],
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: colors['secondary']
          }
        }
      });

      /*
      South America
       */
      $('#vector-south-america').vectorMap({
        map: 'south_america_mill',
        backgroundColor: colors['concrete'],
        regionStyle: {
          initial: {
            fill: colors['primary'],
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: colors['secondary']
          }
        }
      });

      /*
      Europe
       */
      $('#vector-europe').vectorMap({
        map: 'europe_mill',
        backgroundColor: colors['concrete'],
        regionStyle: {
          initial: {
            fill: colors['primary'],
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: colors['secondary']
          }
        }
      });

      /*
      Asia
       */
      $('#vector-australia').vectorMap({
        map: 'oceania_mill',
        backgroundColor: colors['concrete'],
        regionStyle: {
          initial: {
            fill: colors['primary'],
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: colors['secondary']
          }
        }
      });

      /*
      Asia
       */
      $('#vector-asia').vectorMap({
        map: 'asia_mill',
        backgroundColor: colors['concrete'],
        regionStyle: {
          initial: {
            fill: colors['primary'],
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: colors['secondary']
          }
        }
      });

      /*
      Africa
       */
      $('#vector-africa').vectorMap({
        map: 'africa_mill',
        backgroundColor: colors['concrete'],
        regionStyle: {
          initial: {
            fill: colors['primary'],
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
          },
          selected: {
            fill: colors['secondary']
          }
        }
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/maps/vector.js.map
