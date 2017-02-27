navigator.serviceWorker.register('/worker.js').then( reg => {
  console.log('◕‿◕', reg);
}, err => {
  console.log('ಠ_ಠ', err);
});
