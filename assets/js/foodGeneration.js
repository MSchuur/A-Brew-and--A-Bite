// Create the global variables that are required for the food generation API

var key = '';
var applicationId = '';
var pairingListEl = document.querySelector('#storedPairing');
var genBeerNameEl = document.querySelector('#chosenBeerName');
var choiceEl = document.querySelector('.choiceMenu');
var storedNamesListEl = document.querySelector('#storedNamesList');
var recipeChoiceEl = document.querySelector('#choicesCard');
var goBackBtnEl = document.querySelector('#foodGoBack');
var apiUrlName = '';

// Creating Gobal variables to get the local storage from the beer generation page

var newBeerName = '';
var newBeerPairing1;
var newBeerPairing2;
var newBeerPairing3;

// Render the food pairing suggestions from the beer generation page that were stored in local storage

function renderPairing() {
    pairingListEl.innerHTML = '';
    var beerGenData = JSON.parse(localStorage.getItem('personalStorage')) || [];

    // Create the last searched beers list with buttons
    for (var i = beerGenData.length-1; i >= 0; i--) {
      var storedNameEl = document.createElement('button');
      storedNameEl.classList.add('button', 'my-3' ,'is-link', 'is-rounded', 'is-hover', 'is-fullwidth', 'is-focused');
      storedNameEl.innerText = beerGenData[i].beerName;
      storedNameEl.setAttribute('value', i);
      storedNamesListEl.appendChild(storedNameEl);
    }
    
    // Getting the last saved item and subtracting 1 to get the array index
    var arrayLength = beerGenData.length-1;
    
    // newBeerImg = beerGenData[arrayLength].beerImg;
    newBeerName = beerGenData[arrayLength].beerName;
    newBeerPairing1 = beerGenData[arrayLength].beerPairing1;
    newBeerPairing2 = beerGenData[arrayLength].beerPairing2;
    newBeerPairing3 = beerGenData[arrayLength].beerPairing3;

    // Adding the generated beer name to the text as an H3
    genBeerNameEl.textContent = newBeerName;
    
    // Creating the buttons for the 3 suggested food pairing form storage    
    var pairingEl1 = document.createElement('button');
    var pairingEl2 = document.createElement('button');
    var pairingEl3 = document.createElement('button');
    
    pairingEl1.classList.add('button', 'my-3' ,'is-link', 'is-rounded', 'is-hover', 'is-fullwidth', 'is-focused');
    pairingEl2.classList.add('button', 'my-3' ,'is-link', 'is-rounded', 'is-hover', 'is-fullwidth', 'is-focused');
    pairingEl3.classList.add('button', 'my-3' ,'is-link', 'is-rounded', 'is-hover', 'is-fullwidth', 'is-focused');

    pairingEl1.setAttribute('id', 'pairing1');
    pairingEl2.setAttribute('id', 'pairing2');
    pairingEl3.setAttribute('id', 'pairing3');

    pairingEl1.innerText = newBeerPairing1;
    pairingEl2.innerText = newBeerPairing2;
    pairingEl3.innerText = newBeerPairing3;

    pairingListEl.appendChild(pairingEl1);
    pairingListEl.appendChild(pairingEl2);
    pairingListEl.appendChild(pairingEl3);
 }

// Splitting the generated food pairing name so it can be used in the Edamam API
function getRecipeSuggestions(choice) {
    
  var recipeName = ' ';
  var recipeName = choice;
  var recipeArray = recipeName.split(' ');
  for (i=0; i < recipeArray.length; i++) {
    apiUrlName = '';
    apiUrlName = apiUrlName + recipeArray[i]+ ',+';
  }
  var apiUrl = 'https://api.edamam.com/api/recipes/v2/?app_id=86631bdd&app_key='+ key + '&q=' + apiUrlName + '&type=public';
    
    // Fetching the data required in the food API
    fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
        displayRecipe(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
};

// Creating the cards and redering the data from the API
function displayRecipe(data) {
    
  for (var i = 0; i < 3; i++) {
    var newCard = document.createElement('div');
    newCard.classList = 'card column is-one-third newCard';
    recipeChoiceEl.appendChild(newCard);

    var recipeTitle = document.createElement('p');
    recipeTitle.classList.add('card-header-title', 'is-3');
    recipeTitle = data.hits[i].recipe.label;
        
    var recipePhotoUrl = data.hits[i].recipe.image;
    var recipePhoto = document.createElement('img');
    recipePhoto.setAttribute('src', recipePhotoUrl);
    recipePhoto.setAttribute('alt', 'Photo of ' + data.hits[i].recipe.label);
    recipePhoto.classList.add('card-image', 'image', 'is-fullwidth');

    var recipeBtn = document.createElement('button');
    recipeBtn.classList.add('button', 'is-rounded', 'is-link', 'is-hovered', 'is-focused', 'is-fullwidth');
    recipeBtn.innerText = 'Click To Show Recipe';
    recipeBtn.value = data.hits[i].recipe.url;
  
    newCard.append(recipeTitle);
    newCard.append(recipeBtn);
    newCard.append(recipePhoto);
  }
}

// Initialize the the page and call the render of the pairing buttons
renderPairing();

// Creates the pairing cards
pairingListEl.addEventListener('click', function(event) {
  var element = event.target;
  element = element.innerHTML;
  var clear = document.getElementById(choicesCard);
  recipeChoiceEl.innerHTML = ' ';
  getRecipeSuggestions(element);
  });

// Opens a new window/tab url with the recipe 
choiceEl.addEventListener('click', function(event){
  var recipeClick = event.target;
  window.open(recipeClick.value);
});

// Renders the pairing list for a save beer
storedNamesListEl.addEventListener('click', function(event) {
  
  var storedName = event.target;
  storedName = storedName.innerHTML;
  recipeChoiceEl.innerHTML = '';
  var beerGenData = JSON.parse(localStorage.getItem('personalStorage')) || [];
  for (var i = 0; i < beerGenData.length; i++) {
    if (beerGenData[i].beerName === storedName) {
      newBeerPairing1 = beerGenData[i].beerPairing1;
      newBeerPairing2 = beerGenData[i].beerPairing2;
      newBeerPairing3 = beerGenData[i].beerPairing3;

      document.getElementById('pairing1').innerText = newBeerPairing1;
      document.getElementById('pairing2').innerText = newBeerPairing2;
      document.getElementById('pairing3').innerText = newBeerPairing3;    
    }
  }
})
