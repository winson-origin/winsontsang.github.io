'use strict';

var env = {
  path: 'https://rawgit.com/winsontsang/winsontsang.github.io/master'
};

navigator.serviceWorker.register(env.path + '/src/worker.js').then(function (reg) {
  console.log('◕‿◕', reg);
}, function (err) {
  console.log('ಠ_ಠ', err);
});