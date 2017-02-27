const env = {
  username:'winsontsang',
  project: 'winsontsang.github.io',
  branch: 'master',
  path: `https://rawgit.com//${env.username}/${env.branch}/`
}

navigator.serviceWorker.register(`${env.path}/src/worker.js`).then( reg => {
  console.log('◕‿◕', reg);
}, err => {
  console.log('ಠ_ಠ', err);
});
