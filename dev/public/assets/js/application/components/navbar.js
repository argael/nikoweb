(function() {
  (function($, window, document) {
    "use strict";
    var _defaults;
    _defaults = {
      opaque: true
    };
    $.navbar = function(element, options) {
      this.settings = $.extend({}, _defaults);
      this.element = $(element);
      $(window).scroll((function(_this) {
        return function() {
          var scroll_top;
          scroll_top = $(window).scrollTop();
          if (_this.settings.opaque) {
            if (scroll_top > 25) {
              _this.element.addClass('-opaque');
            } else {
              _this.element.removeClass('-opaque');
            }
          }
        };
      })(this)).trigger('scroll');
      $('body').on('click', (function(_this) {
        return function(e) {
          if (!_this.element.hasClass('navbar-collapsed')) {
            return;
          }
          if (!$(e.target).is(_this.element) && !_this.element.has($(e.target)).length > 0) {
            _this.element.removeClass('navbar-collapsed');
          }
          e.stopPropagation();
        };
      })(this));
    };
    return $.fn.navbar = function(opts) {
      return this.each(function(index, element) {
        if (!$.data(element, "navbar")) {
          return $.data(element, "navbar", new $.navbar(element, opts));
        }
      });
    };
  })(window.jQuery, window, document);

}).call(this);

//# sourceMappingURL=../../../maps/application/components/navbar.js.map
