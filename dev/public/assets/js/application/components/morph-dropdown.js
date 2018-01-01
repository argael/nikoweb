(function() {
  (function($, window, document) {
    "use strict";
    var _defaults;
    _defaults = {
      duration: 0.5,
      animate: "TweenLite",
      selectors: {
        link: '.has-morph-dropdown',
        dropdown_target: '.morph-dropdown',
        dropdown_list: '.morph-dropdown-list',
        dropdown_wrapper: '.morph-dropdown-wrapper',
        content: '.morph-content'
      },
      events: {
        link_create: 'morph.linkCreate'
      },
      threshold: {
        xl: 32,
        lg: 32,
        md: 32,
        sm: 16,
        xs: 8
      },
      screen: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1560
      }
    };
    $.morphDropdown = function(element, options) {
      this.settings = $.extend({}, _defaults);
      this.element = $(element);
      this.links = $(this.settings.selectors.link, this.element);
      this.dropdown_targets = $(this.settings.selectors.dropdown_target, this.element);
      this.dropdown_list = $(this.settings.selectors.dropdown_list, this.element);
      this.dropdown_wrapper = $(this.settings.selectors.dropdown_wrapper, this.element);
      if (this.dropdown_wrapper.hasClass('-left')) {
        this.from = 'left';
      } else {
        this.from = 'right';
      }
      this.initialize = (function(_this) {
        return function() {
          _this.link_create_bindings();
          _this.dropdown_bindings();
          _this.resize_bindings();
          _this.touch_bindings();
          _this.set_responsive_context();
          _this.set_threshold();
          _this.init_animator();
          _this.init_link_bindings();
        };
      })(this);
      this.touch_bindings = (function(_this) {
        return function() {
          _this.dropdown_wrapper.on('touchstart', (function() {}));
          _this.links.on('touchstart', (function() {}));
        };
      })(this);
      this.dropdown_bindings = (function(_this) {
        return function() {
          _this.dropdown_wrapper.on('mouseenter', function() {
            _this.cancel_hide_dropdown();
          });
          _this.dropdown_wrapper.on('mouseleave', function() {
            _this.hide_dropdown();
          });
        };
      })(this);
      this.link_create_bindings = (function(_this) {
        return function() {
          _this.element.on(_this.settings.events.link_create, function(e, link) {
            var content, target;
            target = $(link.attr('href'));
            content = $(_this.settings.selectors.content, target);
            link.on('mouseenter', function(e) {
              _this.show_dropdown(link, target, content);
            }).on('mouseleave', function(e) {
              _this.link_hovered = false;
              _this.hide_dropdown();
            }).on('click', function(e) {
              e.preventDefault();
            });
          });
        };
      })(this);
      this.cancel_hide_dropdown = (function(_this) {
        return function() {
          console.log("Cancel hide");
          _this.show_dropdown(_this.current_link, _this.current_target, _this.current_content);
        };
      })(this);
      this.hide_dropdown = (function(_this) {
        return function() {
          console.log("Hide");
          _this.dropdown_targets.removeClass('-active');
          _this.animate.to(_this.dropdown_list, _this.settings.duration, {
            width: 0,
            height: 0,
            x: 0
          });
        };
      })(this);
      this.show_dropdown = (function(_this) {
        return function(link, target, content) {
          var height, width, x;
          console.log("Show");
          _this.current_link = link;
          _this.current_target = target;
          _this.current_content = content;
          _this.link_hovered = true;
          width = content.outerWidth(true);
          height = content.outerHeight(true);
          if (width + _this.threshold > _this.window_width) {
            width = _this.window_width - 2 * _this.threshold;
          }
          if (_this.from === 'right') {
            x = (_this.element.width() - link.width() / 2) - (link.offset().left - _this.element.offset().left) - width / 2;
            if (x < _this.threshold) {
              x = _this.threshold;
            }
            if (x + width + _this.threshold > _this.window_width) {
              x = _this.window_width - width - _this.threshold;
            }
            x = -x;
          } else {
            x = (link.offset().left - _this.element.offset().left) - (width / 2 - link.width() / 2);
            if (x < _this.threshold) {
              x = _this.threshold;
            }
            if (x + width + _this.threshold > _this.window_width) {
              x = _this.window_width - width - _this.threshold;
            }
          }
          _this.dropdown_targets.removeClass('-active');
          clearTimeout(_this.link_timeout);
          _this.link_timeout = setTimeout(function() {
            target.addClass('-active');
          }, _this.settings.duration);
          _this.animate.to(_this.dropdown_list, _this.settings.duration, {
            width: width,
            height: height,
            'margin-right': -x
          });
        };
      })(this);
      this.set_threshold = (function(_this) {
        return function() {
          _this.threshold = _this.settings.threshold[_this.current_responsive_size];
        };
      })(this);
      this.resize_bindings = (function(_this) {
        return function() {
          _this.set_window_size = function() {
            _this.window_width = $(window).width();
            _this.window_height = $(window).height();
          };
          $(window).on('resize', function() {
            _this.set_window_size();
            _this.set_threshold();
          });
          _this.set_window_size();
        };
      })(this);
      this.init_link_bindings = (function(_this) {
        return function() {
          return _this.links.each(function(index, link) {
            _this.element.triggerHandler(_this.settings.events.link_create, [$(link)]);
          });
        };
      })(this);
      this.init_animator = (function(_this) {
        return function() {
          _this.animate = window[_this.settings.animate];
        };
      })(this);

      /*
      Set current responsive range parameter as xs, sm, md, lg or xl
       */
      this.set_responsive_context = (function(_this) {
        return function() {
          if (_this.window_width >= _this.settings.screen.xl) {
            _this.current_responsive_size = 'xl';
          } else if (_this.window_width >= _this.settings.screen.lg) {
            _this.current_responsive_size = 'lg';
          } else if (_this.window_width >= _this.settings.screen.md) {
            _this.current_responsive_size = 'md';
          } else if (_this.window_width >= _this.settings.screen.sm) {
            _this.current_responsive_size = 'sm';
          } else {
            _this.current_responsive_size = 'xs';
          }
        };
      })(this);
      this.initialize();
    };
    return $.fn.morphDropdown = function(opts) {
      return this.each(function(index, element) {
        if (!$.data(element, "morphDropdown")) {
          return $.data(element, "morphDropdown", new $.morphDropdown(element, opts));
        }
      });
    };
  })(window.jQuery, window, document);

}).call(this);

//# sourceMappingURL=../../../maps/application/components/morph-dropdown.js.map
