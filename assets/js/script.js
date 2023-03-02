
// Array for the data that goes into the card carousel template
var carouselImagesVar = [
    {
        image: "assets/Images/brad-qIAw1kNk1p8-unsplash.jpg",
      
    },

    {
        image: "assets/Images/beerBottleForFoodPageHolder.jpg",
      
    },

    {
        image: "assets/Images/beerBottleForFoodPageHolder.jpg",
      
    },

    {
        image: "assets/Images/beerBottleForFoodPageHolder.jpg",
    },

    {
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
            <div class="card-image image is-96X96">
                <img src=${ imageCard.image}>
            </div>
        </section>`
    
      }
    
      $("#carousel").html(carousel);
    
    }
    
    generateCarouselDiv();
