'use strict';

var env = {
  /** DEFAULT **/
};

navigator.serviceWorker.register('/src/worker.js').then(function (reg) {
  console.log('◕‿◕', reg);
}, function (err) {
  console.log('ಠ_ಠ', err);
});