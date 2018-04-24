const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation 1 ...')
        reject(new Error('Because something failed.'))
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation 2 ...')
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(error => console.log(error.message));
