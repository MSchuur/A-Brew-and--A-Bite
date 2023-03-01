var key = '3fe254c2ed7141d18ff352826d6790e2';
console.log(key)
var apiUrl = 'https://api.edamam.com/api/recipes/v2/?app_id=86631bdd&app_key=2929663d6dd7ee94db20d78f5c2a2235&type=public';

fetch(apiUrl)
    .then(function (response) {
        console.log(response);
        // response.JSON();
        
    })

    // https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true

    // API Edamam 2929663d6dd7ee94db20d78f5c2a2235

    // Application ID 86631bdd