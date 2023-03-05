// Create the global variables that are required for the food generation API

var key = '2929663d6dd7ee94db20d78f5c2a2235';
var applicationId = '86631bdd';


var pairingListEl = document.querySelector('#storedPairing')
var pairings = ['Jamaican jerk chicken wings', 'Corn dogs', 'Strawberry ice cream sundae']
var apiUrlName = '';
var choiceEl = document.querySelector('.choiceMenu')
var goBackBtnEl = document.querySelector('#foodGoBack');


// Render the food pairing suggestions from the beer generation page that were stored in local storage

function renderPairing() {
    pairingListEl.innerHTML = '';
    var pairings = JSON.parse(localStorage.getItem('pairings')) || [];
    for(var i= pairings.length-1; i >=0; i--) {
        var pairingEl = document.createElement('button');
        pairingEl.classList.add('button', 'my-3' ,'is-link', 'is-rounded', 'is-hover', 'is-fullwidth', 'is-focused')
        pairingEl.innerText = pairings[i];
        pairingListEl.appendChild(pairingEl);
    }
}

// Store the chosen recipe into local storage to be used on the recipe generation page

function storeRecipeName(recipeLabel) {
  var recipeLabels = JSON.parse(localStorage.getItem('recipe')) || [];
   
  for (var i = 0; i < recipeLabels.length; i ++ ) {
      if (recipeLabels[i] === recipeLabel) {
          return
      }
  }
  if (recipeLabels.length >= 5){
      recipeLabels.shift();
  }
  recipeLabels.push(recipeLabel);
  localStorage.setItem('recipe', JSON.stringify(recipeLabels));
}

function getRecipeSuggestions(choice) {
   
    var recipeName = choice;
    var recipeArray = recipeName.split(' ');
    for (i=0; i < recipeArray.length; i++) {
        apiUrlName = apiUrlName + recipeArray[i]+ ',+';
        
    }
    var apiUrl = 'https://api.edamam.com/api/recipes/v2/?app_id=86631bdd&app_key='+ key + '&q=' + apiUrlName + '&type=public';
    
    
    fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
        console.log(data)
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

function displayRecipe(data) {
    
  for (var i = 0; i < 3; i++) {
    
  var recipeChoiceEl = document.querySelector('#choicesCard');
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

renderPairing(pairings);

pairingListEl.addEventListener('click', function(event) {
  var element = event.target;
  element = element.innerHTML;
  getRecipeSuggestions(element);
  });

choiceEl.addEventListener('click', function(event){
  var recipeClick = event.target;
  console.log(recipeClick.value);
  window.open(recipeClick.value);
});