const baseUrl = 'https://api.github.com';

function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET',`${baseUrl}/users/abdelnasser31/repos`);
  debugger;
  req.send();
}