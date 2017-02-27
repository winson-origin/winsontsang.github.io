const env = {
  path: 'https://rawgit.com/winsontsang/winsontsang.github.io/master'
}

navigator.serviceWorker.register(`${env.path}/src/worker.js`).then( reg => {
  console.log('◕‿◕', reg);
}, err => {
  console.log('ಠ_ಠ', err);
});
