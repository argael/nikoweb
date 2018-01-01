(function() {
  $(document).ready((function(_this) {
    return function() {
      $('#external-events .fc-event').each(function(index, item) {
        $(item).data('event', {
          title: $.trim($(item).text()),
          stick: true
        });
        return $(item).draggable({
          zIndex: 999,
          revert: true,
          revertDuration: 0
        });
      });
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        eventLimit: true,
        events: [
          {
            title: 'All Day Event',
            start: '2016-12-01'
          }, {
            title: 'Long Event',
            start: '2016-12-07',
            end: '2016-12-10'
          }, {
            id: 999,
            title: 'Repeating Event',
            start: '2016-12-09T16:00:00'
          }, {
            id: 999,
            title: 'Repeating Event',
            start: '2016-12-16T16:00:00'
          }, {
            title: 'Conference',
            start: '2016-12-11',
            end: '2016-12-13'
          }, {
            title: 'Meeting',
            start: '2016-12-12T10:30:00',
            end: '2016-12-12T12:30:00'
          }, {
            title: 'Lunch',
            start: '2016-12-12T12:00:00'
          }, {
            title: 'Meeting',
            start: '2016-12-12T14:30:00'
          }, {
            title: 'Happy Hour',
            start: '2016-12-12T17:30:00'
          }, {
            title: 'Dinner',
            start: '2016-12-12T20:00:00'
          }, {
            title: 'Birthday Party',
            start: '2016-12-13T07:00:00'
          }, {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2016-12-28'
          }
        ],
        droppable: true,
        drop: function() {
          if ($('#drop-remove').is(':checked')) {
            $(_this).remove();
          }
        }
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/calendar/calendar.js.map
