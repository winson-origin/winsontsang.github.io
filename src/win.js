'use strict';

var env = {
  branch: 'master',
  path: 'https://cdn.rawgit.com/winsontsang/winsontsang.github.io/' + env.path + '/master/'
};

navigator.serviceWorker.register(env.path + '/src/worker.js').then(function (reg) {
  console.log('◕‿◕', reg);
}, function (err) {
  console.log('ಠ_ಠ', err);
});