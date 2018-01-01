(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';
      var calendar_date, today, zero_pad;
      zero_pad = function(num, places) {
        var zero;
        zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
      };
      today = new Date();
      calendar_date = today.getFullYear() + '-' + zero_pad(today.getMonth() + 1, 2);
      console.log(calendar_date);
      $('#calendar-add-event').on('click', function() {
        var event;
        event = {
          id: 1,
          title: 'Purchase Volta',
          start: calendar_date + '-04'
        };
        $('#calendar').fullCalendar('renderEvent', event, true);
      });
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: calendar_date + '-12',
        editable: true,
        eventLimit: true,
        events: [
          {
            title: 'All Day Event',
            start: calendar_date + '-01'
          }, {
            title: 'Long Event',
            start: calendar_date + '-07',
            end: calendar_date + '-10'
          }, {
            id: 999,
            title: 'Repeating Event',
            start: calendar_date + '-09T16:00:00'
          }, {
            id: 999,
            title: 'Repeating Event',
            start: calendar_date + '-16T16:00:00'
          }, {
            title: 'Conference',
            start: calendar_date + '-11',
            end: calendar_date + '-13'
          }, {
            title: 'Meeting',
            start: calendar_date + '-12T10:30:00',
            end: calendar_date + '-12T12:30:00'
          }, {
            title: 'Lunch',
            start: calendar_date + '-12T12:00:00'
          }, {
            title: 'Meeting',
            start: calendar_date + '-12T14:30:00'
          }, {
            title: 'Happy Hour',
            start: calendar_date + '-12T17:30:00'
          }, {
            title: 'Dinner',
            start: calendar_date + '-12T20:00:00'
          }, {
            title: 'Birthday Party',
            start: calendar_date + '-13T07:00:00'
          }, {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: calendar_date + '-28'
          }
        ]
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/pages/calendar.js.map
