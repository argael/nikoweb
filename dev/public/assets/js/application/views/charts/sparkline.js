(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';
      var draw_sparklines, spark_resize;
      draw_sparklines = function() {
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

      /*
      Resizable Sparklines
       */
      spark_resize = void 0;
      $(window).on('resize', function() {
        clearTimeout(spark_resize);
        spark_resize = setTimeout(draw_sparklines, 500);
      });
      draw_sparklines();
      $("#sparkline-chart-line").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
        type: 'line',
        height: '25px',
        width: '80px',
        lineColor: hex_to_rgba(colors['primary'], 0.5),
        fillColor: 'transparent'
      });
      $("#sparkline-chart-bar").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
        type: 'bar',
        height: '25px',
        width: '80px',
        barColor: hex_to_rgba(colors['primary'], 0.5),
        negBarColor: hex_to_rgba(colors['red'], 0.5)
      });
      $("#sparkline-chart-tristate").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        height: '25px',
        width: '80px',
        posBarColor: hex_to_rgba(colors['green'], 0.5),
        negBarColor: hex_to_rgba(colors['red'], 0.5),
        zeroBarColor: hex_to_rgba(colors['primary'], 0.5)
      });
      $("#sparkline-chart-discrete").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 4, 6, 7, 7, 4, 6, 7, 8, 8, 6, 6, 4], {
        type: 'discrete',
        height: '25px',
        lineColor: hex_to_rgba(colors['primary'], 0.5)
      });
      $("#sparkline-chart-bullet").sparkline([10, 12, 12, 9, 7], {
        type: 'bullet',
        height: '25px',
        width: '80px',
        performanceColor: hex_to_rgba(colors['black'], 0.5),
        targetColor: hex_to_rgba(colors['red'], 0.5),
        rangeColors: [hex_to_rgba(colors['primary'], 0.25), hex_to_rgba(colors['primary'], 0.5), hex_to_rgba(colors['primary'], 0.75)]
      });
      $("#sparkline-chart-pie").sparkline([1, 1, 2], {
        type: 'pie',
        height: '25px',
        width: '25px',
        sliceColors: [hex_to_rgba(colors['primary'], 0.25), hex_to_rgba(colors['primary'], 0.5), hex_to_rgba(colors['primary'], 0.75)]
      });
      $("#sparkline-chart-box").sparkline([4, 27, 34, 52, 54, 59, 61, 68, 78, 82, 85, 87, 91, 93, 100], {
        type: 'box',
        height: '25px',
        width: '80px',
        lineColor: hex_to_rgba(colors['primary'], 0.5),
        boxFillColor: hex_to_rgba(colors['primary'], 0.5),
        boxLineColor: hex_to_rgba(colors['primary'], 0.25),
        whiskerColor: hex_to_rgba(colors['primary'], 0.5),
        medianColor: hex_to_rgba(colors['primary'], 0.5),
        targetColor: hex_to_rgba(colors['green'], 0.5)
      });
      $("#sparkline-chart-composite").sparkline('html', {
        type: 'line',
        height: '25px',
        width: '80px'
      });
      $("#sparkline-chart-composite").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
        lineColor: hex_to_rgba(colors['primary'], 0.5),
        fillColor: 'transparent',
        composite: true
      });
      $("#sparkline-chart-composite").sparkline([4, 5, 4, 5, 7, 8, 4, 3, 2, 1, 5, 7], {
        lineColor: hex_to_rgba(colors['blue'], 0.5),
        fillColor: 'transparent',
        composite: true
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/charts/sparkline.js.map
