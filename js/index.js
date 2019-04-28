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
  console.log(repos);
  
  const repoList = 
    '<ul>' +
     
     
     repos.map( r => {
        
        const dataUsername = `data-username="${r.owner.login}"`;
        const dataRepository = `data-repository="${r.name}"`;
        
        return `
            <li>
                <h2>${r.name}</h2>
                <a href="${r.html_url}" target="_blank">
                  ${r.html_url}
                </a><br><br>
                <a href="#" ${dataRepository} ${dataUsername} onclick="getCommits(this)">
                  Get Commits
                </a><br>
                <a href="#" ${dataRepository} ${dataUsername} onclick="getBranches(this)">
                  Get Branches
                </a>
            </li>`;
     }).join('') +
     
     
  '</ul>';
    
    
    
    document.getElementById('repositories').innerHTML = repoList;
}
