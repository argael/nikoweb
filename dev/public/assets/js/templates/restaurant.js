(function() {
  $('document').ready(function() {
    return $('#slidea').slidea({
      autoplay: false,
      layout: "fluid",
      scroller: {
        enabled: true
      },
      contentScaling: {
        enabled: true,
        factor: {
          xs: 0.75
        }
      },
      delay: 9000,
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
        },
        '#menu-slide': {
          object: {
            '.slidea-description': {
              initial: "y 100%, opacity 0, duration 1000"
            }
          }
        }
      },
      pagination: {
        enabled: true,
        position: 'right'
      }
    });
  });

}).call(this);

//# sourceMappingURL=../../maps/templates/restaurant.js.map
