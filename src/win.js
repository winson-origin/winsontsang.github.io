'use strict';

var env = {
  path: 'https://raw.github.com/winsontsang/winsontsang.github.io/master/src'
};

navigator.serviceWorker.register(path + '/src/worker.js').then(function (reg) {
  console.log('◕‿◕', reg);
}, function (err) {
  console.log('ಠ_ಠ', err);
});