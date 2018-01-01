(function() {
  $(document).ready(function() {
    'use strict';
    var axis, data, draw_sparklines, flot_tooltip_binding, options, spark_resize;
    draw_sparklines = (function(_this) {
      return function() {
        var bar_data, threshold, width;
        threshold = $(window).width() < 1280;

        /*
        Sales Sparkline
         */
        width = threshold ? Math.floor($("#chart-sales-status").parent().width()) : 150;
        bar_data = [45, 56, 76, 48, 78, 99, 70, 90, 79, 102, 74, 90, 98, 120, 90, 102, 74, 90, 98, 120, 90, 77, 103, 105, 120];
        $("#chart-sales-status").sparkline(bar_data, {
          type: 'bar',
          height: 50,
          width: "100%",
          barWidth: width * 4 / 6 / bar_data.length,
          barSpacing: width * 2 / 6 / bar_data.length,
          barColor: hex_to_rgba(colors['green'], 0.5),
          negBarColor: hex_to_rgba(colors['red'], 0.5),
          spotColor: hex_to_rgba(colors['green'], 0.5),
          minSpotColor: hex_to_rgba(colors['green'], 0.5),
          maxSpotColor: hex_to_rgba(colors['green'], 0.5)
        });

        /*
        Users Sparkline
         */
        width = threshold ? Math.floor($("#chart-users-status").parent().width()) : 150;
        $("#chart-users-status").sparkline([40, 60, 30, 50, 80, 100, 70, 90], {
          type: 'line',
          height: 50,
          width: width,
          lineWidth: 2,
          lineColor: hex_to_rgba(colors['blue'], 0.5),
          fillColor: 'transparent',
          spotColor: hex_to_rgba(colors['blue'], 0.5),
          minSpotColor: hex_to_rgba(colors['blue'], 0.5),
          maxSpotColor: hex_to_rgba(colors['blue'], 0.5),
          highlightSpotColor: hex_to_rgba(colors['blue'], 0.5),
          highlightLineColor: hex_to_rgba(colors['blue'], 0.5)
        });

        /*
        Impressions Sparkline
         */
        width = threshold ? Math.floor($("#chart-impressions-status").parent().width()) : 150;
        $("#chart-impressions-status").sparkline([440, 400, 460, 400, 250, 330, 350, 370], {
          type: 'line',
          height: 50,
          width: width,
          lineWidth: 2,
          lineColor: hex_to_rgba(colors['orange'], 0.5),
          fillColor: 'transparent',
          spotColor: hex_to_rgba(colors['orange'], 0.5),
          minSpotColor: hex_to_rgba(colors['orange'], 0.5),
          maxSpotColor: hex_to_rgba(colors['orange'], 0.5),
          highlightSpotColor: hex_to_rgba(colors['orange'], 0.5),
          highlightLineColor: hex_to_rgba(colors['orange'], 0.5)
        });

        /*
        Downloads Sparkline
         */
        width = threshold ? Math.floor($("#chart-downloads-status").parent().width()) : 150;
        $("#chart-downloads-status").sparkline([344, 280, 285, 311, 244, 232, 188], {
          type: 'line',
          height: 50,
          width: width,
          lineWidth: 2,
          lineColor: hex_to_rgba(colors['red'], 0.5),
          fillColor: 'transparent',
          spotColor: hex_to_rgba(colors['red'], 0.5),
          minSpotColor: hex_to_rgba(colors['red'], 0.5),
          maxSpotColor: hex_to_rgba(colors['red'], 0.5),
          highlightSpotColor: hex_to_rgba(colors['red'], 0.5),
          highlightLineColor: hex_to_rgba(colors['red'], 0.5)
        });
      };
    })(this);

    /*
    Resizable Sparklines
     */
    spark_resize = void 0;
    $(window).on('resize', (function(_this) {
      return function() {
        clearTimeout(spark_resize);
        spark_resize = setTimeout(draw_sparklines, 500);
      };
    })(this));
    draw_sparklines();

    /*
    Project Progress Chart
     */
    if ($('#chart-project-progress').length > 0) {
      $("<div id='flot-tooltip'></div>").appendTo("body");
      flot_tooltip_binding = function(event, pos, item) {
        var x, y;
        if (item) {
          x = item.datapoint[0].toFixed(2);
          y = item.datapoint[1].toFixed(2);
          $("#flot-tooltip").html(item.series.label + " " + x + "% = " + y).css({
            top: item.pageY + 5,
            left: item.pageX + 5
          }).fadeIn(200);
        } else {
          $("#flot-tooltip").hide();
        }
      };
      data = [
        {
          label: "Progress",
          data: [[0, 50], [12.5, 60], [25, 30], [37.5, 40], [50, 30], [62.5, 50], [75, 40], [87.5, 50], [100, 40]],
          color: colors['dark']['medium']
        }, {
          label: "Expected",
          data: [[0, 50], [12.5, 40], [25, 0], [37.5, 20], [50, 60], [62.5, 40], [75, 30], [87.5, 40], [100, 20]],
          color: hex_to_rgba(colors['primary'], 0.5)
        }, {
          label: "Issues",
          data: [[0, 10], [12.5, 10], [25, 0], [37.5, 6], [50, 8], [62.5, 25], [75, 15], [87.5, 5], [100, 2]],
          color: hex_to_rgba(hex_shade(colors['primary'], -0.1), 0.75)
        }
      ];
      axis = {
        color: colors['light']['lighter']
      };
      options = {
        legend: {
          labelBoxBorderColor: colors['light']['light'],
          backgroundColor: colors['dark']['light'],
          color: "#ffffff"
        },
        grid: {
          hoverable: true,
          clickable: true,
          borderWidth: 0,
          borderColor: colors['light']['light']
        },
        series: {
          lines: {
            show: true,
            fill: true,
            color: colors['white'],
            fillColor: {
              colors: [
                {
                  opacity: 0.25
                }, {
                  opacity: 0.75
                }
              ]
            }
          },
          points: {
            show: true,
            fillColor: colors['black']
          },
          grow: {
            active: true,
            duration: 1000
          }
        },
        xaxis: axis,
        yaxis: axis
      };
      $.plot($("#chart-project-progress"), data, options);
      $("#chart-project-progress").on("plothover", flot_tooltip_binding);
    }

    /*
    Top Sales Pie Chart
     */
    if ($('#chart-top-sales').length > 0) {
      data = [
        {
          label: "Services",
          data: 450,
          color: hex_to_rgba(colors['primary'], 0.75)
        }, {
          label: "Online",
          data: 760,
          color: hex_to_rgba(colors['primary'], 0.5)
        }, {
          label: "Store",
          data: 145,
          color: hex_to_rgba(colors['primary'], 0.25)
        }
      ];
      axis = {
        show: false,
        reserveSpace: false
      };
      options = {
        legend: {
          show: false
        },
        grid: {
          hoverable: true,
          clickable: true,
          borderWidth: 0,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderColor: colors['light']['light']
        },
        series: {
          pie: {
            innerRadius: 0,
            stroke: {
              width: 0,
              color: hex_to_rgba(colors['primary'], 1)
            },
            borderWidth: 0,
            label: {
              formatter: function(label, series) {
                return "<div style='font-size:8pt; text-align:center; padding:2px; color: rgba(255,255,255,0.9);'>" + label + "<br/>" + series.data[0][1] + "</div>";
              }
            },
            highlight: {
              opacity: 0.1
            },
            show: true,
            color: colors['white']
          }
        },
        xaxis: axis,
        yaxis: axis
      };
      $.plot($("#chart-top-sales"), data, options);
    }

    /*
    Visits Pie Chart
     */
    if ($('#chart-monthly-visits').length > 0) {
      data = [
        {
          label: "Direct Access",
          data: 1034,
          color: hex_to_rgba(colors['primary'], 0.75)
        }, {
          label: "Advertisement",
          data: 1768,
          color: hex_to_rgba(colors['primary'], 0.5)
        }, {
          label: "Facebook",
          data: 564,
          color: hex_to_rgba(colors['facebook'], 0.33)
        }, {
          label: "Twitter",
          data: 428,
          color: hex_to_rgba(colors['twitter'], 0.33)
        }, {
          label: "Google Plus",
          data: 245,
          color: hex_to_rgba(colors['google-plus'], 0.33)
        }
      ];
      axis = {
        show: false,
        reserveSpace: false
      };
      options = {
        legend: {
          show: false
        },
        grid: {
          hoverable: true,
          clickable: true,
          borderWidth: 0,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderColor: colors['light']['light']
        },
        series: {
          pie: {
            innerRadius: 0.33,
            stroke: {
              width: 0,
              color: hex_to_rgba(colors['primary'], 1)
            },
            borderWidth: 0,
            label: {
              formatter: function(label, series) {
                return "<div style='font-size:8pt; text-align:center; padding:2px; color: rgba(255,255,255,0.9);'>" + label + "<br/>" + series.data[0][1] + "</div>";
              }
            },
            highlight: {
              opacity: 0.1
            },
            show: true,
            color: colors['white']
          }
        },
        xaxis: axis,
        yaxis: axis
      };
      $.plot($("#chart-monthly-visits"), data, options);
    }

    /*
    Visits Pie Chart
     */
    if ($('#chart-advertisement').length > 0) {
      data = [
        {
          label: "Facebook",
          data: [[0, 20], [12.5, 20], [25, 25], [37.5, 20], [50, 35], [62.5, 30], [75, 45], [87.5, 40], [100, 50]],
          color: hex_to_rgba(colors['facebook'], 0.75)
        }, {
          label: "Google",
          data: [[0, 50], [12.5, 60], [25, 30], [37.5, 40], [50, 30], [62.5, 50], [75, 40], [87.5, 50], [100, 76]],
          color: hex_to_rgba(colors['primary'], 0.75)
        }
      ];
      axis = {
        color: colors['light']['lighter']
      };
      options = {
        legend: {
          labelBoxBorderColor: colors['light']['light'],
          backgroundColor: colors['dark']['light'],
          color: "#ffffff"
        },
        grid: {
          show: false,
          hoverable: true,
          clickable: true,
          borderWidth: 0,
          borderColor: colors['light']['light']
        },
        series: {
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [
                {
                  opacity: 0
                }, {
                  opacity: 0.5
                }
              ]
            }
          },
          points: {
            show: true,
            fillColor: colors['white']
          }
        },
        xaxis: axis,
        yaxis: axis
      };
      $.plot($("#chart-advertisement"), data, options);
      $("#chart-advertisement").on("plothover", flot_tooltip_binding);
    }
    $('.tasks-calendar').datepicker();
  });

}).call(this);

//# sourceMappingURL=../../../maps/application/views/index.js.map
