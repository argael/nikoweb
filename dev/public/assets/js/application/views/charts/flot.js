(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';

      /*
      Flot Tooltip
       */
      var axis, data, flot_tooltip_binding, options;
      if ($('.chart').length > 0) {
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
      }

      /*
      Flot Primary Chart
       */
      if ($('#flot-chart-primary').length > 0) {
        data = [
          {
            label: "Progress",
            data: [[0, 20], [12.5, 20], [25, 25], [37.5, 20], [50, 35], [62.5, 30], [75, 45], [87.5, 40], [100, 50]],
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
            hoverable: true,
            clickable: true,
            borderWidth: 1,
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
            },
            grow: {
              active: true,
              duration: 1000
            }
          },
          xaxis: axis,
          yaxis: axis
        };
        $.plot($("#flot-chart-primary"), data, options);
        $("#flot-chart-primary").on("plothover", flot_tooltip_binding);
      }

      /*
      Flot Dark Chart
       */
      if ($('#flot-chart-dark').length > 0) {
        data = [
          {
            label: "Progress",
            data: [[0, 50], [12.5, 60], [25, 30], [37.5, 40], [50, 30], [62.5, 50], [75, 40], [87.5, 50], [100, 40]],
            color: colors['dark']['medium']
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
            borderWidth: 1,
            borderColor: colors['dark']['light']
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
        $.plot($("#flot-chart-dark"), data, options);
        $("#flot-chart-dark").on("plothover", flot_tooltip_binding);
      }

      /*
      Flot Combined Chart
       */
      if ($('#flot-chart-combined').length > 0) {
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
            borderWidth: 1,
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
        $.plot($("#flot-chart-combined"), data, options);
        $("#flot-chart-combined").on("plothover", flot_tooltip_binding);
      }

      /*
      Flot Panel Line Chart
       */
      if ($('#flot-chart-line').length > 0) {
        data = [
          {
            label: "Progress",
            data: [[0, 55], [20, 50], [40, 30], [60, 40], [80, 50], [100, 50]],
            color: hex_to_rgba(colors['blue'], 0.5)
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
        $.plot($("#flot-chart-line"), data, options);
        $("#flot-chart-line").on("plothover", flot_tooltip_binding);
      }

      /*
      Flot Panel Pie Chart
       */
      if ($('#flot-chart-pie').length > 0) {
        data = [
          {
            label: "Advertising",
            data: 60,
            color: hex_to_rgba(colors['primary'], 0.75)
          }, {
            label: "Referral",
            data: 20,
            color: hex_to_rgba(colors['primary'], 0.5)
          }, {
            label: "Organic",
            data: 20,
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
              innerRadius: 0.33,
              stroke: {
                width: 0,
                color: hex_to_rgba(colors['primary'], 1)
              },
              borderWidth: 0,
              label: {
                formatter: function(label, series) {
                  return "<div style='font-size:8pt; text-align:center; padding:2px; color: rgba(255,255,255,0.9);'>" + label + "<br/>" + series.data[0][1] + "%</div>";
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
        $.plot($("#flot-chart-pie"), data, options);
      }

      /*
      Flot Panel Bar Chart
       */
      if ($('#flot-chart-bar').length > 0) {
        data = [
          {
            label: "Price",
            data: [[0, 30], [10, 40], [20, 30], [30, 40], [40, 50], [50, 30], [60, 40], [70, 50], [80, 60], [90, 40], [100, 45]],
            color: hex_to_rgba(colors['green'], 0.5)
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
            bars: {
              show: true,
              fill: true,
              stroke: {
                width: 1
              },
              color: colors['white'],
              barWidth: 7,
              align: 'center',
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
            grow: {
              active: true,
              duration: 1000
            }
          },
          xaxis: axis,
          yaxis: axis
        };
        $.plot($("#flot-chart-bar"), data, options);
        $("#flot-chart-bar").on("plothover", flot_tooltip_binding);
      }
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/charts/flot.js.map
