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

    setTimeout(() => {
        console.log('Reading a user from a database ...');
        callback({ id: id, username: 'tinhcao' }, 'abcxyz');
    }, 2000);
}
getUser(1, getRepository);
function getRepository(user) {
    getRepository(user.username, getRepository);
}
function getRepository(username, callback) {
    setTimeout(() => {
        console.log('Getting repository list ...');
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
};

function displayCommits(commits) {
    console.log(commits);
}