const beerBtn = $('#beerBtn');

const randomBeer = $('.random-beer')
const displayDescription = $('.description')
var deletionIndex= 0;
function getBeer(event) {
  // event.preventDefault();

  const beerRandom1 = fetch('https://api.punkapi.com/v2/beers/random').then(res => res.json());
  const beerRandom2 = fetch('https://api.punkapi.com/v2/beers/random').then(res => res.json());
  const beerRandom3 = fetch('https://api.punkapi.com/v2/beers/random').then(res => res.json());
  
  Promise.all([beerRandom1, beerRandom2, beerRandom3])
  .then(data => {
    console.log(data);
    console.log(beerRandom2);

    let existingData = JSON.parse(localStorage.getItem('personalStorage')) || [];

    // Generate new item
    let newBeer = {
    beerName: beerName,
    beerDescription: beerDescription,
    beerIngredients: beerIngredients,
    volumeValue: volumeValue,
    volumeUnit: volumeUnit,
    beerTag: beerTag,
    beerPair1: beerPair1,
    beerPair2: beerPair2,
    beerPair3: beerPair3,
    };
    // Append new item to existing data
    if(existingData.length>9){
        delete existingData[deletionIndex]
        existingData.push(newBeer);
        deletionIndex++;
        if(deletionIndex==9){
            deletionIndex=0;
        }
    }
    if(existingData.length<=9){
    existingData.push(newBeer);
    }
    // Save updated data to local storage
    localStorage.setItem('personalStorage', JSON.stringify(existingData));

          // RANDOM BEER 1
          const beerName = data[0][0].name;
          console.log(beerName)
          const beerDescription = data[0][0].description;
          const firstBrewed = data[0][0].first_brewed
          console.log(beerDescription)
          const beerIngredients = data[0][0].ingredients;
          console.log(beerIngredients)
          const volumeValue = data[0][0].volume.value;
          console.log(volumeValue)
          const volumeUnit = data[0][0].volume.unit;
          console.log(volumeUnit)
          // const beerImg = data[0][0].image_url;
          // console.log(beerImg)
          const beerTag = data[0][0].tagline;
          console.log(beerTag)

          
          showRandomBeer1(beerName, firstBrewed, beerDescription, beerIngredients, volumeValue, volumeUnit, beerTag)
  

  })
}


function showRandomBeer1(beerName, firstBrewed, beerDescription, beerIngredients, volumeValue, volumeUnit, beerTag) {
  $("#show-random-beer").empty()
  var cardDiv = $("<div>");
  cardDiv.addClass("card");
  cardDiv.html(`
  <div class="card-body">
    <h3>
    <span>Beer: ${beerName}</span>
    </h3>
    <span>First brewed: ${firstBrewed}</span>
    <h5>
      <span>${beerTag}</span>
      <ul>
        <li>Ingredients: ${beerIngredients} not yet done, coming soon!</li>
        <li>Volume: ${volumeValue} ${volumeUnit}</li>
      </ul>
      <span>Description: [${beerDescription}]</span>
    </h5>
  </div>
  `);

  $("#show-random-beer").append(cardDiv);
}

beerBtn.on('click', getBeer);
