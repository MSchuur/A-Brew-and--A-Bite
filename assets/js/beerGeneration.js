
// const beerApi1 = "https://api.punkapi.com/v2/beers/random";
// const beerApi2 = "https://api.punkapi.com/v2/beers/random";

// Promise.all([beerApi1, beerApi2])
// .then(values => {
//   return Promise.all(values(r => r.json()));
// }).then(([]))







const beerBtn = $('#beerBtn');

const randomBeer = $('.random-beer')

function getBeer(event) {
  // // event.preventDefault();

    for(var i = 0; i < 3; i++) {


    const beerApi = "https://api.punkapi.com/v2/beers/random";

    fetch(beerApi)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      const beerName = data[0].name;
      const beerName1 = data[1].name;
      console.log(beerName1)
      const beerDescription = data[0].description;
      const beerDescription1 = data[1].description;
      // console.log(beerDescription)
      const beerIngredients = data[0].ingredients.malt[0];
      const beerIngredients1 = data[1].ingredients.malt[0];
      // console.log(beerIngredients)
      const volumeValue = data[0].volume.value;
      const volumeValue1 = data[1].volume.value;
      // console.log(volumeValue)
      const volumeUnit = data[0].volume.unit;
      const volumeUnit1 = data[1].volume.unit;
      // console.log(volumeUnit)
      // const beerImg = data[0].image_url;
      // console.log(beerImg)
      const beerTag = data[0].tagline;
      const beerTag1 = data[1].tagline;
      // console.log(beerTag)
      const beerPair1 = data[0].food_pairing[0];
      const beerPair2 = data[0].food_pairing[1];
      const beerPair3 = data[0].food_pairing[2];
      const beerPair4 = data[1].food_pairing[0];
      const beerPair5 = data[1].food_pairing[1];
      const beerPair6 = data[1].food_pairing[2];
      // console.log(beerPair1)
      // console.log(beerPair2)
      // console.log(beerPair3)
      
      showRandomBeer1(beerName, beerDescription, beerIngredients, volumeValue, volumeUnit, beerTag, beerPair1, beerPair2, beerPair3)
    })
    
    // fetch(beerApi)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);

    //   const beerName = data[0].name;
    //   console.log(beerName)
    //   const beerDescription = data[0].description;
    //   console.log(beerDescription)
    //   const beerIngredients = data[0].ingredients.malt[0];
    //   console.log(beerIngredients)
    //   const volumeValue = data[0].volume.value;
    //   console.log(volumeValue)
    //   const volumeUnit = data[0].volume.unit;
    //   console.log(volumeUnit)
    //   // const beerImg = data[0].image_url;
    //   // console.log(beerImg)
    //   const beerTag = data[0].tagline;
    //   console.log(beerTag)
    //   const beerPair1 = data[0].food_pairing[0];
    //   const beerPair2 = data[0].food_pairing[1];
    //   const beerPair3 = data[0].food_pairing[2];
    //   console.log(beerPair1)
    //   console.log(beerPair2)
    //   console.log(beerPair3)
      
    //   showRandomBeer2(beerName, beerDescription, beerIngredients, volumeValue, volumeUnit, beerTag, beerPair1, beerPair2, beerPair3)
    // })

  
  }

}

// RANDOM BEER 1
function showRandomBeer1(beerName, beerDescription, beerIngredients, volumeValue, volumeUnit, beerTag, beerPair1, beerPair2, beerPair3) {
  $("#show-random-beer").empty()
  var cardDiv = $("<div>");
  cardDiv.addClass("card");
  cardDiv.html(`
  <div class="card-body">
    <h3>
    <span>Beer: ${beerName}</span>
    </h3>
    <h5>
      <span>${beerTag}</span>
      <ul>
        <li>Ingredients: ${beerIngredients} not yet done, coming soon!</li>
        <li>Volume: ${volumeValue} ${volumeUnit}</li>
      </ul>
      <span>Description: [${beerDescription}]</span>
    </h5>
    <h4>Suggested Food Pairings</h4>
    <h5>
      <ul>
        <li>Pair1: ${beerPair1}</li>
        <li>Pair2: ${beerPair2}</li>
        <li>Pair3: ${beerPair3}</li>
      </ul>
    </h5>
  </div>
  `);

  $("#show-random-beer").append(cardDiv);
}

// function showRandomBeer2(beerName1, beerDescription1, beerIngredients1, volumeValue1, volumeUnit1, beerTag1, beerPair1, beerPair2, beerPair3) {
//   $("#show-random-beer").empty()
//   var card2Div = $("<div>");
//   card2Div.addClass("card");
//   card2Div.html(`
//   <div class="card-body">
//     <h3>
//     <span>Beer: ${beerName1}</span>
//     </h3>
//     <h5>
//       <span>${beerTag1}</span>
//       <ul>
//         <li>Ingredients: ${beerIngredients1} not yet done, coming soon!</li>
//         <li>Volume: ${volumeValue1} ${volumeUnit1}</li>
//       </ul>
//       <span>Description: [${beerDescription1}]</span>
//     </h5>
//     <h4>Suggested Food Pairings</h4>
//     <h5>
//       <ul>
//         <li>Pair1: ${beerPair4}</li>
//         <li>Pair2: ${beerPair5}</li>
//         <li>Pair3: ${beerPair6}</li>
//       </ul>
//     </h5>
//   </div>
//   `);

//   $("#show-random-beer2").append(card2Div);
// }

beerBtn.on('click', getBeer,);

