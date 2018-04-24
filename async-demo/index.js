console.log('Before');
getUser(1, function (user, token) {
    console.log('User', user);
    console.log('Token', token);
    // get repository
    getRepository(user.username, function (arr) {
        console.log('Repository list : ' + arr);
    });
});
console.log('After');
// get user function
function getUser(id) {
    return new Promise((resolve, reject) => {
        resolve({ id: id, username: 'tinhcao' }, 'abcxyz');
    });
}

function getRepository(username, callback) {
    setTimeout(() => {
        console.log('Getting repository list ...');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
};