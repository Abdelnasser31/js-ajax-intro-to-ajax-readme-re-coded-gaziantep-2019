const baseUrl = 'https://api.github.com';

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET',`${baseUrl}/users/abdelnasser31/repos`);
  req.send();
}
function showRepositories() {
  let repos = JSON.parse(this.responseText);
  
  let repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>')}</ul>`;
document.getElementById('repositories').innerHTML = repoList;
}
