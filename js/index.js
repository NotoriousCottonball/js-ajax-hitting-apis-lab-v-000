const rootURL = 'https://api.github.com';

function getRepositories() {
    const username = document.getElementById('username').value;

     const req = new XMLHttpRequest();
    req.addEventListener('load', displayRepositories)
    req.open('GET', `https://api.github.com/users/${username}/repos`);

     req.send();
    return false;
}

