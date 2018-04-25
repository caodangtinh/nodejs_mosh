console.log('Before');
//
const customer = getCustomer(1);
console.log(customer);

const topMovies = getTopMovie();
console.log(topMovies);

//
console.log('After');

// function declarations
function getCustomer(id) {
    setTimeout(() => {
        return {
            id: 1,
            name: 'tinh cao',
            isGold: true,
            email: 'caodangtinh@gmail.com'
        };
    }, 4000);
};

function getTopMovie() {
    setTimeout(() => {
        return ['movie1', 'movie2'];
    }, 4000);
};

function sendEmail(email, movies) {
    setTimeout(() => {
        console.log('Sending email to ' + email + ' with the list of movies ' + movies)
    }, 4000);
}