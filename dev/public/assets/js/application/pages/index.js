(function() {
  $(document).ready(function() {
    $('.navbar').navbar();
    $('.navbar').morphDropdown();
    $('.sidebar-menu').metisMenu();
    $('.sidebar-menu').on('shown.metisMenu hidden.metisMenu', (function(_this) {
      return function() {
        $('.sidebar-wrapper').nanoScroller();
      };
    })(this));
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover({
      trigger: 'hover'
    });
  });

}).call(this);

//# sourceMappingURL=../../../maps/application/pages/index.js.map
