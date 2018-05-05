const facebookRequest = new Promise(((resolve, reject) => {
    setTimeout(() => {
        console.log('Getting Facebook avatar ...');
        resolve('img01.jpg');
        // reject(new Error('Error when getting Facebook avatar ...'));
    }, 1000);
}));

const twitterRequest = new Promise(((resolve, reject) => {
    setTimeout(() => {
        console.log('Getting Twitter twit ...');
        resolve('Trump twit');
        // reject(new Error('Error when getting Twitter twit'));
    }, 1000);
}));

const linkedInRequest = new Promise(((resolve, reject) => {
    setTimeout(() => {
        console.log('Getting LinkedIn job ...');
        resolve('Senior Java Developer');
        // reject(new Error('Error when getting LinkedIn job ...'));
    }, 10000);
}));

// kick off all promise
const finalResult = Promise.all([facebookRequest, twitterRequest, linkedInRequest])
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
