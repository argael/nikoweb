(function() {
  $(document).ready((function(_this) {
    return function() {
      $('.portfolio-item').each(function(index, item) {
        var image, loader;
        item = $(item);
        image = $('img', item);
        loader = $('<img/>', {
          src: image.attr('src')
        });
        loader.on('load', function() {
          $('.portfolio-item-title', item).imagine({
            animation: "y 0.25"
          });
          $('.portfolio-item-subtitle', item).imagine({
            animation: "y 0.27, scale 0.1"
          });
        });
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../maps/templates/portfolio.js.map
