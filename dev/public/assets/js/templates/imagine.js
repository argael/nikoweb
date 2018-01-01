(function() {
  $(document).ready((function(_this) {
    return function() {
      $('#header-canvas').on('imagine.load', function(e) {
        $('#header-text .section-title').imagine({
          animation: 'opacity 1.5, y 0.5'
        });
        $('#header-text .section-description').imagine({
          animation: 'opacity 2, y 0.57'
        });
      });
      $('#header-canvas').imagine({
        size: 'fullscreen',
        animation: {
          layer: {
            '#header-layer-1': 'x -0.25, y 0.2',
            '#header-layer-2': 'x 0.65, y 0.4',
            '#header-layer-3': 'x -0.3, y -0.1',
            '#header-layer-4': 'x -0.45, y -0.2',
            '#header-layer-5': 'x 0.3, y 0.1',
            '#header-layer-6': 'x 0.5, y 0.2',
            '#header-layer-7': 'y -0.6'
          }
        }
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../maps/templates/imagine.js.map
