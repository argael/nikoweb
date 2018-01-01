(function() {
  $(document).ready((function(_this) {
    return function() {
      var assets_path, left, top;
      if ($("[data-assets-path]")) {
        assets_path = $("[data-assets-path]").attr('data-assets-path');
      } else {
        assets_path = '';
      }

      /*
      Initialize slidea plugin
       */
      $('#slidea').slidea({
        autoplay: false,
        layout: "default",
        delay: 9000,
        controls: {
          enabled: true
        },
        overlap: 0,
        animation: {
          initial: "x -100%, opacity 0, duration 1000",
          out: "x 100%, opacity 0, duration 1000"
        }
      });

      /*
      Remove a slide
       */
      $('#remove-slide').on('click', function() {
        $('#slidea').data('slidea').removeSlide(0);
      });

      /*
      Add a new slide
       */
      $('#add-slide').on('click', function() {
        $('#slidea').data('slidea').addSlide(0, {
          image: assets_path + "/img/templates/base/slide-1.jpg",
          background: {
            0: {
              duration: 500,
              initial: "opacity 0, scale 3",
              out: "opacity 0, scale 0"
            }
          }
        });
      });
      $('#slidea').on('slidea.addSlide', function(index) {
        $('#slidea').data('slidea').slide(0);
      });
      left = -480;
      top = 0;

      /*
      Add a new layer
       */
      $('#add-layer').on('click', function() {
        if (top > 1275) {
          top = 0;
        }
        if (left > 1920) {
          left = 0;
          top += 240;
        } else {
          left += 480;
        }
        $('#slidea').data('slidea').addLayer(0, 0, {
          image: assets_path + "/img/templates/base/slide-1.jpg",
          top: top,
          left: left,
          start: 600,
          width: 480,
          height: 240,
          duration: 500,
          initial: "opacity 0, scale 3",
          out: "opacity 0, scale 0"
        });
      });

      /*
      Add a new html layer
       */
      $('#add-html-layer').on('click', function() {
        if (top > 1275) {
          top = 0;
        }
        if (left > 1920) {
          left = 0;
          top += 240;
        } else {
          left += 480;
        }
        $('#slidea').data('slidea').addLayer(0, 0, {
          html: "<h1 class='text-white'>I love slidea!</h1>",
          top: top,
          left: left,
          start: 600,
          width: 480,
          height: 240,
          duration: 500,
          initial: "opacity 0, scale 3",
          out: "opacity 0, scale 0"
        });
      });

      /*
      Add a new object
       */
      $('#add-object').on('click', function() {
        $('#slidea').data('slidea').addObject(0, {
          target: '.slidea-content-container',
          html: "<h1 class='text-white'>I love slidea!</h1>",
          start: 600,
          duration: 500,
          initial: "opacity 0, scale 3",
          out: "opacity 0, scale 0"
        });
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../maps/templates/dynamic-content.js.map
