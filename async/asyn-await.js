console.log('Before');

async function displayCommit() {
    try {
        // Get user
        const user = await getUser(1);
        console.log(user);

        // get repository
        const repositories = await getRepositories(user.gitHubUserName);
        console.log(repositories);

        // get commit
        const commits = await getCommits(repositories[0]);
        console.log(commits);
    } catch (e) {
        console.log(e.message);
    }
};

displayCommit();

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