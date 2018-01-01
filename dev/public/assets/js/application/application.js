(function() {
  $(document).ready(function() {
    'use strict';
    var chat_form, chat_form_message, chat_items, chat_view, chat_view_tab, close_left_sidebar, close_right_sidebar, left_sidebar, left_sidebar_menu, resize_content, resize_content_timeout, right_sidebar, right_sidebar_tab_contents, right_sidebar_tabs, right_sidebar_toggle, showing;
    $('.navbar').navbar();
    $('.navbar').morphDropdown();
    left_sidebar = $('#sidebar');
    left_sidebar_menu = $('.sidebar-menu', left_sidebar);
    if (left_sidebar.length > 0) {
      left_sidebar_menu.metisMenu();
      $('.nano', left_sidebar).nanoScroller({
        iOSNativeScrolling: true
      });
      showing = false;
      left_sidebar_menu.on('show.metisMenu', (function(_this) {
        return function() {
          left_sidebar.addClass('-open');
          if (left_sidebar.hasClass('-open')) {
            return showing = true;
          }
        };
      })(this));
      left_sidebar_menu.on('hidden.metisMenu', (function(_this) {
        return function() {
          if (!showing) {
            left_sidebar.removeClass('-open');
          }
          return showing = false;
        };
      })(this));
      left_sidebar_menu.on('shown.metisMenu hidden.metisMenu orientationchange', (function(_this) {
        return function() {
          $('.nano', left_sidebar).nanoScroller();
        };
      })(this));
      close_left_sidebar = (function(_this) {
        return function(e) {
          if ($(window).width() < 992 && $(e.target).closest('.sidebar.-left').length === 0) {
            $('.active a', left_sidebar).trigger('click');
          }
        };
      })(this);
      $('body').on('click', close_left_sidebar);
    }
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover({
      trigger: 'hover'
    });
    resize_content_timeout = void 0;
    resize_content = (function(_this) {
      return function() {
        $('.content').css({
          'min-height': $(window).height() - $('.navbar').height()
        });
      };
    })(this);
    $(window).resize((function(_this) {
      return function() {
        resize_content_timeout = clearTimeout(resize_content_timeout);
        setTimeout(resize_content, 100);
      };
    })(this));
    resize_content();
    right_sidebar = $('.sidebar.-slideable');
    if (right_sidebar.length > 0) {
      right_sidebar_tabs = $('.sidebar .sidebar-tab');
      right_sidebar_tab_contents = $('.sidebar .sidebar-tab-content');
      right_sidebar_toggle = $('#right-sidebar-toggle');
      right_sidebar_toggle.on('click', (function(_this) {
        return function(e) {
          right_sidebar.toggleClass('-open');
          $('a', right_sidebar_toggle).toggleClass('-active');
          setTimeout((function() {
            return $('.sidebar-wrapper', right_sidebar).nanoScroller();
          }), 600);
        };
      })(this));
      close_right_sidebar = (function(_this) {
        return function(e) {
          if (right_sidebar.hasClass('-open') && $(e.target) !== right_sidebar_toggle && $(e.target).closest('#right-sidebar-toggle').length === 0 && $(e.target).closest('.sidebar.-slideable').length === 0) {
            right_sidebar.removeClass('-open');
            $('a', right_sidebar_toggle).removeClass('-active');
          }
        };
      })(this);
      $('body').on('click', close_right_sidebar);
      right_sidebar_tabs.each((function(_this) {
        return function(index, tab) {
          var target;
          tab = $(tab);
          target = $(tab.attr('data-target'));
          tab.on('click', function(e) {
            right_sidebar_tabs.removeClass('-active');
            right_sidebar_tab_contents.removeClass('-active');
            tab.addClass('-active');
            target.addClass('-active');
            setTimeout((function() {
              return $('.sidebar-wrapper', right_sidebar).nanoScroller();
            }), 600);
            target.triggerHandler('tab.show', [target]);
          });
        };
      })(this));
      chat_view_tab = $('#chat-view-tab');
      chat_view = $('.chat-view', chat_view_tab);
      chat_items = $('.chat-items', chat_view_tab);
      chat_form = $('.chat-form');
      chat_form_message = $('input[name="message"]', chat_form);
      if (chat_view.length > 0) {
        $('.nano', chat_view).nanoScroller({
          iOSNativeScrolling: true
        });
        chat_view_tab.on('tab.show', (function(_this) {
          return function(e, tab) {
            setTimeout(function() {
              $('.nano', chat_view).nanoScroller({
                scroll: 10000
              });
            }, 500);
          };
        })(this));
        chat_form.on('submit', (function(_this) {
          return function(e) {
            var message;
            message = chat_form_message.val();
            chat_form_message.val('');
            chat_items.append($('<div>', {
              "class": 'chat-item -to',
              text: message
            }));
            $('.nano', chat_view).nanoScroller();
            $('.nano', chat_view)[0].nanoscroller.scrollBottom(0);
            e.preventDefault();
            return false;
          };
        })(this));
      }
    }
  });

}).call(this);

//# sourceMappingURL=../../maps/application/application.js.map
