const env = {
  branch: 'master',
  path: `https://cdn.rawgit.com/winsontsang/winsontsang.github.io/${env.path}/master/`
}

navigator.serviceWorker.register(`${env.path}/src/worker.js`).then( reg => {
  console.log('◕‿◕', reg);
}, err => {
  console.log('ಠ_ಠ', err);
});
