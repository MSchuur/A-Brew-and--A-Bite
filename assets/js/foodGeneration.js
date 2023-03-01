var key = '2929663d6dd7ee94db20d78f5c2a2235';
var applicationId = '86631bdd';
console.log(key)
var apiUrl = 'https://api.edamam.com/api/recipes/v2/?app_id=86631bdd&app_key='+ key + '&type=public';

fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data)
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });


   