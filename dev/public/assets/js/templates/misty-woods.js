(function() {
  $(document).ready((function(_this) {
    return function() {
      $('#landscape-canvas').on('imagine.load', function(e) {
        $('#landscape-text').imagine({
          animation: 'opacity 1, scale 0.5'
        });
      });
      $('#landscape-canvas').imagine({
        animation: {
          layer: {
            '#landscape-layer-1': "y 0.6",
            '#landscape-layer-2': "y 0.55",
            '#landscape-layer-3': "y 0.5",
            '#landscape-layer-4': "y 0.45",
            '#landscape-layer-5': "y 0.4",
            '#landscape-layer-6': "y 0.25",
            '#landscape-layer-7': "y 0.2",
            '#landscape-layer-8': "y 0.15"
          }
        },
        size: 'fullscreen'
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../maps/templates/misty-woods.js.map
