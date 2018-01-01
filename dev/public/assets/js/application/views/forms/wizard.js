(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';
      $('.wizard').steps({
        headerTag: "h3",
        bodyTag: "div",
        transitionEffect: "slideLeft",
        autoFocus: true,
        enableAllSteps: false,
        enableFinishButton: true,
        enablePagination: true
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/forms/wizard.js.map
