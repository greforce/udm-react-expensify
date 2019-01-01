const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is my resolved data');
    // reject('something went wrong');
  }, 3500);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is my other promise');
    }, 3500);
  });
}).then((data) => {
  console.log('does this run?', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
