const baseUrl = 'https://api.github.com';

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET',`${baseUrl}/users/abdelnasser31/repos`);
  req.send();
}
function showRepositories() {
  let repos = JSON.parse(this.responseText);
  
   const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el){
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
    req.addEventListener('load', showCommits);
  req.open('GET','https://api.github.com/repos/abdelnasser31/' +name+'/commits');
  req.send();
}
function showCommits() {
  const commit = JSON.parse(this.responseText);
  console.log(commit);
  const commitList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`;
  document.getElementById('commits').innerHTML = commitList;
}