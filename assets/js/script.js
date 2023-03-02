// Array for the data that goes into the card carousel template
var carouselImagesVar = [
    {
        name: "Pale Ale",
        image: "src",
      
    },

    {
        name: "Sour",
        image: "src",
      
    },

    {
        name: "Lager",
        image: "src",
      
    },

    {
        name: "Stout",
        image: "src",
      
    },

    {
        name: "IPA",
        image: "src",
      
    },

      
    ]
    
    // loops through and creates divs in the html to hold the cards with their images and name
    function generateCarouselDiv(){
      var carouselImages = ""
    
      for(var i=0; i < carouselImagesVar.length; i++){
        var imageCard = carouselImagesVar[i]
        imageCardNew += 
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
    
      $("#carousel").html(imageCardNew);
    
    }
    
    generateCarouselDiv();
