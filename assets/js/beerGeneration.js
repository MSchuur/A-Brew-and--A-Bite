const beerBtn = $("#beerBtn");

const randomBeer = $(".random-beer");
const displayDescription = $(".description");

const newBeer = [];
// let deletionIndex= 0;
// let existingData = JSON.parse(localStorage.getItem('personalStorage')) || [];

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
      const volumeValue = threeBeers[i].volume.value;
      const volumeUnit = threeBeers[i].volume.unit;
      const beerTag = threeBeers[i].tagline;

      showRandomBeer(
        beerImg,
        beerName,
        firstBrewed,
        beerDescription,
        volumeValue,
        volumeUnit,
        beerTag
      );
    }
  });
}

function showRandomBeer(
  beerImg,
  beerName,
  firstBrewed,
  beerDescription,
  volumeValue,
  volumeUnit,
  beerTag
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
        <p class="subtitle is-6">Volume: ${volumeValue} ${volumeUnit}</p>
        <p class="subtitle is-8">"${beerTag}"</p>
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


    // Generate new item
    // let newBeer = {
    //   beerImg: beerImg,
    //   beerName: beerName,
    //   firstBrewed: firstBrewed,
    //   beerDescription: beerDescription,
    //   volumeValue: volumeValue,
    //   volumeUnit: volumeUnit,
    //   beerTag: beerTag,
    //   };
            
      // Append new item to existing data
      // if(newBeer.length>7){
      //     delete newBeer[deletionIndex]
      //     newBeer.push(newBeer);
      //     deletionIndex++;
      //     if(deletionIndex==7){
      //       deletionIndex=0;
      //     }
      //   }
      // if(newBeer.length<=7){
      //   newBeer.push(newBeer);
      // }
    
    // Save updated data to local storage
    // localStorage.setItem("newBeer", JSON.stringify(newBeer))
  })

  cardDiv.append(saveBtn)

{/* <figure class="image is-2by5">
      <img src="${beerImg}" alt="Placeholder image" class="beer-img">
    </figure> */}



  $("#show-random-beer").append(cardDiv);
}

beerBtn.on("click", getBeer);
