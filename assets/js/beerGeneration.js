const beerBtn = $("#beerBtn");

const randomBeer = $(".random-beer");
const displayDescription = $(".description");

const newBeer = [];
 let deletionIndex= 0;
 let existingData = JSON.parse(localStorage.getItem('personalStorage')) || [];

function getBeer(event) {
  // event.preventDefault();

  const beerRandom1 = fetch("https://api.punkapi.com/v2/beers/random").then(
    (res) => res.json()
  );
  const beerRandom2 = fetch("https://api.punkapi.com/v2/beers/random").then(
    (res) => res.json()
  );
  const beerRandom3 = fetch("https://api.punkapi.com/v2/beers/random").then(
    (res) => res.json()
  );

  Promise.all([beerRandom1, beerRandom2, beerRandom3]).then((data) => {

    const threeBeers = [data[0][0], data[1][0], data[2][0]];

    $("#show-random-beer").empty();

    for (i = 0; i < threeBeers.length; i++) {
      const beerImg = threeBeers[i].image_url || "https://images.punkapi.com/v2/165.png";
      const beerName = threeBeers[i].name;
      const beerDescription = threeBeers[i].description;
      const firstBrewed = threeBeers[i].first_brewed;
      const beerTag = threeBeers[i].tagline;
      const beerPairing = threeBeers[i].food_pairing[0];
      const beerPairing2 = threeBeers[i].food_pairing[1];
      const beerPairing3 = threeBeers[i].food_pairing[2];
      console.log(beerPairing)

      showRandomBeer(
        beerImg,
        beerName,
        firstBrewed,
        beerDescription,
        beerTag,
        beerPairing,
        beerPairing2,
        beerPairing3,
      );
    }
  });
}

function showRandomBeer(
  beerImg,
  beerName,
  firstBrewed,
  beerDescription,
  beerTag,
  beerPairing,
  beerPairing2,
  beerPairing3,
) {
  var cardDiv = $("<div>");
  cardDiv.addClass("card");
  cardDiv.addClass("column");
  cardDiv.addClass("is-one-third");
  cardDiv.html(`
  <div class="card-image">
    
  </div>
  <div class="card-content">
    <div class="beer-img" style="background-image: url('${beerImg}')">

    </div>
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Beer: ${beerName}</p>
        <p class="subtitle is-6">First brewed: ${firstBrewed}</p>
        <p class="subtitle is-8">"${beerTag}"</p>
        <ul>Food Pairings:
          <li>${beerPairing}</li>
          <li>${beerPairing2}</li>
          <li>${beerPairing3}</li>
        </ul>
      </div>
    </div>

    <div class="content">
      ${beerDescription}
      <br>
    </div>
</div>`);

  const saveBtn = $("<button>");
  saveBtn.text("Save");
  saveBtn.addClass("button is-success is-light");

  saveBtn.on("click", (event) => {
    $(event.target).removeClass("is-light");


    let newBeer = {
      beerName: beerName,
      beerPairing1: beerPairing ,
      beerPairing2: beerPairing2,
      beerPairing3: beerPairing3
      };
            
    //Append new item to existing data
    if(existingData.length>9){
      existingData.shift();
      existingData.push(newBeer);
      deletionIndex++;
    }
    else if(existingData.length<=9){
      existingData.push(newBeer);
    }
    
    // Save updated data to local storage
     localStorage.setItem("personalStorage", JSON.stringify(existingData))
     window.location.href='foodGeneration.html'
  })

  cardDiv.append(saveBtn)

{/* <figure class="image is-2by5">
      <img src="${beerImg}" alt="Placeholder image" class="beer-img">
    </figure> */}



  $("#show-random-beer").append(cardDiv);
}

beerBtn.on("click", getBeer);
