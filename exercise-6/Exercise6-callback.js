console.log('Before');

getCustomer(1, (customer) => {
    console.log(customer);
    if (customer.isGold) {
        // get top movie
        getTopMovie(customer.name, (topMovies) => {
            console.log(topMovies);
            // send email
            sendEmail(customer.email, () => {

            });
        });
    }
});
console.log('After');

function getCustomer(id, callback) {
    setTimeout(() => {
        console.log('Getting customer information ...');
        callback({
            id: 1,
            name: 'tinhcao',
            isGold: true,
            email: 'caodangtinh@gmail.com'
        })
    }, 4000);
};

function getTopMovie(customerName, callback) {
    setTimeout(() => {
        console.log('Getting top movie of ' + customerName + '...');
        callback(['movie1', "movie2"]);
    }, 4000);
};

function sendEmail(email, callback) {
    setTimeout(() => {
        console.log('Sending email to ' + email + ' ...')
        callback();
    }, 4000);
};