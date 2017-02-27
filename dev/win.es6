const env = {
  /** DEFAULT **/
}

navigator.serviceWorker.register(`/src/worker.js`).then( reg => {
  console.log('◕‿◕', reg);
}, err => {
  console.log('ಠ_ಠ', err);
});
