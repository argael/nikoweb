(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';
      $('#summernote').summernote({
        callbacks: {
          onInit: function() {
            $('#summernote .dropdown-menu').addClass('-dark');
          }
        }
      });
      $("#markdown").markdown({
        parser: function(content) {
          return new showdown.Converter().makeHtml(content);
        }
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/forms/wysiwyg.js.map
