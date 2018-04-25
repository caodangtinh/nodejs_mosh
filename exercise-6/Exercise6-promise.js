console.log('Before');
getCustomer(1)
    .then(customer => getTopMovie(customer.name)
        .then(topMovies => sendEmail(customer.email)))
    .catch(error => console.log(error.message));

console.log('After');

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting customer information ...');
            resolve({
                id: 1,
                name: 'tinhcao',
                isGold: true,
                email: 'caodangtinh@gmail.com'
            });
        }, 4000);
    });
};

function getTopMovie(customerName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting top movie of ' + customerName + '...');
            // reject(new Error('Error when getting top movie'));
            resolve(['movie1', "movie2"]);
        }, 4000);
    });
};

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        console.log('Sending email to ' + email + ' ...');
        setTimeout(() => {
            resolve();
        }, 4000);
    });
};