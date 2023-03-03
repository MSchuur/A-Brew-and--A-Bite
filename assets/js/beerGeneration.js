const savedBeers = [];

const beerBtn = $("#beerBtn");

const randomBeer = $(".random-beer");
const displayDescription = $(".description");

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
    console.log(data);
    // console.log(beerRandom2);

    const threeBeers = [data[0][0], data[1][0], data[2][0]];
    console.log(threeBeers);

    $("#show-random-beer").empty();

    for (i = 0; i < threeBeers.length; i++) {
      const beerImg = threeBeers[i].image_url || "https://images.punkapi.com/v2/165.png";
      console.log(beerImg);
      const beerName = threeBeers[i].name;
      console.log(beerName);
      const beerDescription = threeBeers[i].description;
      const firstBrewed = threeBeers[i].first_brewed;
      console.log(beerDescription);
      const volumeValue = threeBeers[i].volume.value;
      console.log(volumeValue);
      const volumeUnit = threeBeers[i].volume.unit;
      console.log(volumeUnit);
      const beerTag = threeBeers[i].tagline;
      console.log(beerTag);

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
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
</div>`);

  const saveBtn = $("<button>");
  saveBtn.text("Save");
  saveBtn.addClass("button is-success is-light");

  saveBtn.on("click", (event) => {
    $(event.target).removeClass("is-light");

    savedBeers.push({
      beerImg,
      beerName
    })

    localStorage.setItem("savedBeers", JSON.stringify(savedBeers))
  })

  cardDiv.append(saveBtn)

{/* <figure class="image is-2by5">
      <img src="${beerImg}" alt="Placeholder image" class="beer-img">
    </figure> */}



  $("#show-random-beer").append(cardDiv);
}

beerBtn.on("click", getBeer);
