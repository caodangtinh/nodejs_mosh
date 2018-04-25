console.log('Before');
// Get user
const user = getUser(1, (user) => {
    console.log('User', user);
    // Get the repositories
    const repos = getRepositories(user.gitHubUserName, (repositories) => {
        console.log(repositories);
        // Get commit
        const commits = getCommits(repositories[0], (commitsArr) => {
            console.log(commitsArr);
        });
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user information from database ...');
        callback({id: id, gitHubUserName: 'tinhcao'});
    }, 2000);
};

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Getting Repository of user ' + username);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repository, callback) {
    setTimeout(() => {
        console.log('Getting commit from repository ' + repository);
        callback(['commit 1', 'commit 2', 'commit 3']);
    }, 2000);
}