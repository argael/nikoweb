(function() {
  $('document').ready(function() {
    'use strict';
    var responsive;
    responsive = {
      xs: 0,
      sm: 544,
      md: 768,
      lg: 992,
      xl: 1200
    };
    if ($.fn.isotope) {
      $('#topics-section').isotope({
        selector: '> div'
      });
    }
    $('.social-icons a').each(function(index, icon) {
      var color_class;
      color_class = 'social-colored social-' + $(icon).attr('data-color');
      $(icon).on('mouseenter', (function(_this) {
        return function() {
          $('#social-section').addClass(color_class);
        };
      })(this));
      $(icon).on('mouseleave', (function(_this) {
        return function() {
          $('#social-section').removeClass(color_class);
        };
      })(this));
    });
    $('.folder-tree-view .folder').each((function(_this) {
      return function(index, folder) {
        var icon, label;
        folder = $(folder);
        label = $('> span', folder);
        icon = $('> i', label);
        if (folder.hasClass('disabled')) {
          return;
        }
        label.on('click', function(e) {
          folder.toggleClass('open');
          icon.toggleClass('fa-folder fa-folder-open');
        });
      };
    })(this));
  });

}).call(this);

//# sourceMappingURL=../../maps/documentation/documentation.js.map
