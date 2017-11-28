import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  plugins: [ babel({ exclude: 'node_modules/**' }) ],
  output: {
    file: 'hammer.js',
    format: 'es',
  },
  intro: " (function(window, document, exportName, undefined) { \n'use strict';",
  outro: "})(window, document, 'Hammer');"
};
