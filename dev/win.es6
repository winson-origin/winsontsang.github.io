const env = {
  path: 'https://raw.github.com/winsontsang/winsontsang.github.io/master/src'
}

navigator.serviceWorker.register(`${path}/src/worker.js`).then( reg => {
  console.log('◕‿◕', reg);
}, err => {
  console.log('ಠ_ಠ', err);
});
