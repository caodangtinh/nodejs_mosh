console.log('Before');
// Get user
getUser(1)
    .then(user => getRepositories(user.gitHubUserName)
        .then(repo => getCommits(repo[0]))
        .then(commit => console.log(commit)))
    .catch(error => console.log(error.message));
console.log('After');

// get User
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user information from database ...');
            resolve({id: id, gitHubUserName: 'tinhcao'});
        }, 2000);
    });
};

// get repository
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting Repository of user ' + username);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

// get commit
function getCommits(repository) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commit from repository ' + repository);
            reject(new Error('Can not get repository caused by wrong repository'));
            // resolve(['commit 1', 'commit 2', 'commit 3']);
        }, 2000);
    }));
};