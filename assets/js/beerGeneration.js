function getBeer(event) {
  // event.preventDefault();

  var beer = "https://api.punkapi.com/v2/beers?";

  fetch(beer)
  .then(res => res.json())
  .then(data => {
  console.log(data)

})
  
}

getBeer()