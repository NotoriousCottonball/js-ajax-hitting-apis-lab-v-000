//<form onsubmit="getRepositories();return false;">


function getRepositories() {
    const username = document.getElementById('username').value;
    const req = new XMLHttpRequest();
    
    req.addEventListener('load', displayRepositories);
      
    req.open('GET', `https://api.github.com/users/${username}/repos`);
    req.send();
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos.map(r => '<li>' 
         + r.name + ' - '
         + r.html_url 
         + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a>' 
         + ' - <a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>')
    .join('')}</ul>`;
    
    document.getElementById('repositories').innerHTML = repoList;
}
