(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';
      var collapsible_panels, dismissible_panels;
      collapsible_panels = $('.panel.-collapsible');
      if (collapsible_panels.length > 0) {
        collapsible_panels.each(function(index, panel) {
          var body, collapse;
          panel = $(panel);
          body = $('.panel-body', panel);
          collapse = $('[data-action="collapse"]', panel);
          collapse.on('click', function(e) {
            e.preventDefault();
            $('i', collapse).toggleClass('fa-chevron-right fa-chevron-down');
            body.stop().slideToggle();
          });
        });
      }
      dismissible_panels = $('.panel.-dismissible');
      if (dismissible_panels.length > 0) {
        return dismissible_panels.each(function(index, panel) {
          var body, dismiss;
          panel = $(panel);
          body = $('.panel-body', panel);
          dismiss = $('[data-action="dismiss"]', panel);
          dismiss.on('click', function(e) {
            e.preventDefault();
            panel.slideToggle(function() {
              panel.remove();
            });
          });
        });
      }
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../maps/application/components/panel.js.map
