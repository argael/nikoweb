(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';
      var dropzone_id;
      dropzone_id = 'my-dropzone';
      Dropzone.options[dropzone_id] = {
        paramName: "file",
        maxFilesize: 2
      };
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/forms/multi-upload.js.map
