(function() {
  (function() {
    'use strict';
    window['hex_to_rgba'] = function(hex, alpha) {
      var result, rgb;
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (alpha == null) {
        alpha = 1;
      }
      rgb = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
      return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + alpha + ")";
    };
    window['hex_shade'] = function(color, percent) {
      var B, G, R, f, p, t;
      f = parseInt(color.slice(1), 16);
      t = percent < 0 ? 0 : 255;
      p = percent < 0 ? percent * -1 : percent;
      R = f >> 16;
      G = f >> 8 & 0x00FF;
      B = f & 0x0000FF;
      return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + Math.round((t - B) * p) + B).toString(16).slice(1);
    };
    window['rgb_shade'] = function(color, percent) {
      var B, G, R, f, p, t;
      f = color.split(',');
      t = percent < 0 ? 0 : 255;
      p = percent < 0 ? percent * -1 : percent;
      R = parseInt(f[0].slice(4));
      G = parseInt(f[1]);
      B = parseInt(f[2]);
      return 'rgb(' + Math.round((t - R) * p) + R + ',' + Math.round((t - G) * p) + G + ',' + Math.round((t - B) * p) + B + ')';
    };
    window['hex_blend'] = function(c0, c1, p) {
      var B1, B2, G1, G2, R1, R2, f, t;
      f = parseInt(c0.slice(1), 16);
      t = parseInt(c1.slice(1), 16);
      R1 = f >> 16;
      G1 = f >> 8 & 0x00FF;
      B1 = f & 0x0000FF;
      R2 = t >> 16;
      G2 = t >> 8 & 0x00FF;
      B2 = t & 0x0000FF;
      return '#' + (0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 + (Math.round((G2 - G1) * p) + G1) * 0x100 + Math.round((B2 - B1) * p) + B1).toString(16).slice(1);
    };
    window['colors'] = {
      aqua: '#7fdfff',
      blue: '#0074d9',
      navy: '#001f3f',
      teal: '#39cccc',
      green: '#2ecc40',
      olive: '#3d9970',
      lime: '#01ff70',
      yellow: '#ffdc00',
      orange: '#ff851b',
      red: '#ff4136',
      fuchsia: '#f012be',
      purple: '#b10dc9',
      maroon: '#85144b',
      white: '#ffffff',
      silver: '#f2f2f2',
      darksilver: '#d1d1d1',
      gray: '#aaaaaa',
      lightgray: '#cccccc',
      concrete: '#1d1d1e',
      asphalt: '#3b3b3b',
      black: '#111111',
      facebook: '#3b5998',
      twitter: '#1da1f2',
      'google-plus': '#dd4b39',
      dribbble: '#ea4c89',
      behance: '#1769ff',
      flickr: '#ff0084',
      linkedin: '#0077b5',
      youtube: '#cd201f',
      pinterest: '#bd081c',
      github: '#333333',
      tumblr: '#35465c',
      twitch: '#6441a5',
      envato: '#82b541'
    };
    window['colors']['light'] = {
      lighter: hex_to_rgba(colors['white'], 0.125),
      light: hex_to_rgba(colors['white'], 0.25),
      medium: hex_to_rgba(colors['white'], 0.5),
      dark: hex_to_rgba(colors['white'], 0.75),
      darker: hex_to_rgba(colors['white'], 0.825)
    };
    return window['colors']['dark'] = {
      lighter: hex_to_rgba(colors['black'], 0.125),
      light: hex_to_rgba(colors['black'], 0.25),
      medium: hex_to_rgba(colors['black'], 0.5),
      dark: hex_to_rgba(colors['black'], 0.75),
      darker: hex_to_rgba(colors['black'], 0.825)
    };
  })();

}).call(this);

//# sourceMappingURL=../../maps/themes/base.js.map
