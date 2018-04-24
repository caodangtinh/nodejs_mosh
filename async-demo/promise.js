const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1);
        reject(new Error('Error Message'));
    }, 2000);
    // reject (new Error('Message'));
});
p
    .then(result => console.log('Result ' + result))
    .catch(error => console.log(error.message));