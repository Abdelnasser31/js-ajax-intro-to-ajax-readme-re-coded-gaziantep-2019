const baseUrl = 'https://api.github.com';

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET',`${baseUrl}/users/abdelnasser31/repos`);
  req.send();
}
function showRepositories() {
let repoList = '<ul>';
for (let i = 0; i < this.response.length ; i++){
  repoList += '<li>' + this.rs
}
}
