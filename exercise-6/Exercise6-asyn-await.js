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

console.log('Before');

async function displayCustomerInformation() {
    try {
        const customer = await getCustomer(1);
        console.log(customer);
        if (customer.isGold) {
            const topMovies = await getTopMovie(customer.name);
            console.log(topMovies);
            await sendEmail(customer.email);
        }
    } catch (e) {
        console.log('Error ' + e.message);
    }
}

displayCustomerInformation();
console.log('After');