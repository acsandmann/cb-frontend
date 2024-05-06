const originalColors = require('./tailwind.colors')
function darkenColor(hex, percent) {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return '#' + [r, g, b].map(x => Math.floor(x * (1 - percent)).toString(16).padStart(2, '0')).join('');
  }
  
  function darkenPalette(palette, percent) {
    const newPalette = {};
    for (const section in palette) {
      newPalette[section] = {};
      for (const key in palette[section]) {
        newPalette[section][key] = darkenColor(palette[section][key], percent);
      }
    }
    return newPalette;
  }
  
  const darkenedPalette = darkenPalette(originalColors, 0.1); // Darkens by 10%
  console.log(darkenedPalette);