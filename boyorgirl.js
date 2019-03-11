var boy = 0;
var girl = 0;

function refreshResults () {
  var results = document.getElementById('results');
  results.innerHTML = 'TOTAL: ' + (boy + girl);
  results.innerHTML += '<br/>BOY: ' + boy;
  results.innerHTML += '<br/>GIRL: ' + girl;
}

document.getElementById('boy-button').addEventListener('click', function () {
  boy++;
  refreshResults();
});

document.getElementById('girl-button').addEventListener('click', function () {
  girl++;
  refreshResults();
});