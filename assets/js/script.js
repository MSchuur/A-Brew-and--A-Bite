
// Array for the data that goes into the card carousel template
var carouselImagesVar = [
    {
        image: "assets/Images/wil-stewart-UErWoQEoMrc-unsplash.jpg",
      
    },

    {
        image: "assets/Images/christin-hume-08tX2fsuSLg-unsplash.jpg",
      
    },

    {
        image: "assets/Images/alexander-kovacs-Q_X0T0E0IyU-unsplash.jpg",
      
    },

    {
        image: "assets/Images/missy-fant-OMIgwm1i_NY-unsplash.jpg",
      
    },

    {
        image: "assets/Images/jon-parry-C8eSYwQkwHw-unsplash.jpg",
      
    },
      
    ]
    
    // loops through and creates divs in the html to hold the cards with their images and name
    function generateCarouselDiv(){
      var carousel = ""
    
      for(var i=0; i < carouselImagesVar.length; i++){
        var imageCard = carouselImagesVar[i]
        carousel += 
        `<section class="section">
            <div class="card-image image is-128x128" id="carousel">
            <div class="card-image image is-128x128">
                <img src=${ imageCard.image}>
            </div>
            </div>
        </section>`
    
      }
    
      $("#carousel").html(carousel);
    
    }
    
    generateCarouselDiv();
