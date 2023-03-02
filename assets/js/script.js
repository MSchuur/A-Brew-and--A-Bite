// Array for the data that goes into the card carousel template
var carouselImagesVar = [
    {
        name: "Pale Ale",
        image: "assets/Images/beerBottleForFoodPageHolder.jpg",
      
    },

    {
        name: "Sour",
        image: "assets/Images/beerBottleForFoodPageHolder.jpg",
      
    },

    {
        name: "Lager",
        image: "assets/Images/beerBottleForFoodPageHolder.jpg",
      
    },

    {
        name: "Stout",
        image: "assets/Images/beerBottleForFoodPageHolder.jpg",
    },

    {
        name: "IPA",
        image: "assets/Images/beerBottleForFoodPageHolder.jpg",
      
    },

      
    ]
    
    // loops through and creates divs in the html to hold the cards with their images and name
    function generateCarouselDiv(){
      var carousel = ""
    
      for(var i=0; i < carouselImagesVar.length; i++){
        var imageCard = carouselImagesVar[i]
        carousel += 
        `<section class="section">
            <div class="card" id="carousel">
            <header class="card-header">
                <p class="card-header-title is-centered is-size-3"> ${ imageCard.name} </p>
            </header>
            <div class="card-image image is-96X96">
                <img src=${ imageCard.image}>
            </div>
        </section>`
    
      }
    
      $("#carousel").html(carousel);
    
    }
    
    generateCarouselDiv();
