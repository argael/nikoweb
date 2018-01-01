(function() {
  (function($, window, document) {
    "use strict";
    $.form = function(element, options) {
      this.form = $(element);
      this.groups = $('.form-group', this.form);
      this.inputs = $('input, textarea, select', this.form);
      this.check = {};
      this.action = this.form.attr('action');
      this.method = this.form.attr('method');
      if (this.method == null) {
        this.method = 'POST';
      }
      this.groups.each((function(_this) {
        return function(index, group) {
          var input, label;
          group = $(group);
          input = $('input, textarea, select', group);
          label = $('label', group);
          group.on('click', function() {
            input.focus();
          });
          if (input.val() !== "") {
            label.addClass('active');
          }
          input.on('focusin', function() {
            group.removeClass('has-error');
            label.addClass('active');
          });
          input.on('focusout', function() {
            if (input.val() === "") {
              label.removeClass('active');
            }
          });
        };
      })(this));
    };
    return $.fn.form = function(opts) {
      return this.each(function(index, element) {
        if (!$.data(element, "form")) {
          return $.data(element, "form", new $.form(element, opts));
        }
      });
    };
  })(window.jQuery, window, document);

}).call(this);

//# sourceMappingURL=../../../maps/application/components/form.js.map
