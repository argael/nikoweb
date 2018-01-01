(function() {
  $('document').ready(function() {
    return $('#slidea').slidea({
      autoplay: false,
      layout: "fluid",
      layoutSettings: {
        size: 'screenHeight'
      },
      delay: 9000,
      thumbnails: {
        enabled: true,
        position: 'left'
      },
      contentScaling: {
        enabled: true,
        factor: {
          md: 0.8,
          sm: 0.7,
          xs: 0.6
        }
      },
      overlap: 0,
      animation: {
        initial: "x -100%, opacity 0, duration 1000",
        out: "x 100%, opacity 0, duration 1000"
      },
      slide: {
        '.slidea-slide': {
          object: {
            '.slidea-dot': {
              initial: "scale 0.1, easing easeOutBounce, opacity 0, duration 1000"
            },
            '.slidea-title': {
              initial: "y -100%, opacity 0, duration 1000"
            },
            '.slidea-title-lg': {
              initial: "y 100%, opacity 0, duration 1000"
            },
            '#menu-title': {
              initial: "y 100%, opacity 0, duration 1000"
            },
            '.slidea-description': {
              initial: "y -100%, opacity 0, duration 1000"
            },
            '.slidea-description-lg': {
              initial: "y -100%, opacity 0, duration 1000"
            },
            '.slidea-description-xlg': {
              initial: "y -100%, opacity 0, duration 1000"
            },
            '.menu-title': {
              initial: "y 100%, opacity 0, duration 1000"
            },
            '.menu-description': {
              initial: "y 100%, opacity 0, duration 1000"
            },
            '.menu-price': {
              initial: "y 100%, opacity 0, duration 1000"
            }
          }
        }
      }
    });
  });

}).call(this);

//# sourceMappingURL=../../maps/templates/real-estate.js.map
