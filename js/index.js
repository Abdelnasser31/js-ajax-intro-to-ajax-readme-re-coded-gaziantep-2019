const baseUrl = 'https://api.github.com';

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET',`${baseUrl}/users/abdelnasser31/repos`);
  req.send();
}
function showRepositories() {
  let json= JSON.parse(this.responseText);
  debugger;
  let result = json.results;
  let repoList = '<ul>';
  for (let i = 0; i < this.responseText.length ; i++){
  repoList += '<li>' + result[i]['name'] + '</li>';
}     
repoList += '</ul>';
document.getElementById('repositories').innerHTML = repoList;
}
