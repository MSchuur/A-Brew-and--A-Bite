// Create the global variables that are required for the food generation API

var key = '2929663d6dd7ee94db20d78f5c2a2235';
var applicationId = '86631bdd';
var apiUrl = 'https://api.edamam.com/api/recipes/v2/?app_id=86631bdd&app_key='+ key + '&q=chicken,+mango&type=public';

var pairingListEl = document.querySelector('#storedPairing')
var pairings = ['Jamaican jerk chicken wings', 'Corn dogs', 'Strawberry ice cream sundae']

function renderPairing() {
    pairingListEl.innerHTML = '';
    var pairings = JSON.parse(localStorage.getItem('pairings')) || [];
    for(var i= pairings.length-1; i >=0; i--) {
        var pairingEl = document.createElement('button');
        pairingEl.classList.add("button")
        pairingEl.innerText = pairings[i];
        console.log(pairings);
        pairingListEl.appendChild(pairingEl);
    }
}









// fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           console.log(data)
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to GitHub');
//     });


renderPairing(pairings);