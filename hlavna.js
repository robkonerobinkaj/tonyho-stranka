$(document).ready(function(){
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mainMenu = document.getElementById('main-menu');

  hamburgerBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
  });

  // Jednoduchý slider - zmena obrázku každých 3 sekúnd
  let images = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg'
  ];
  let currentIndex = 0;
  setInterval(function(){
    currentIndex = (currentIndex + 1) % images.length;
    $('#slider img').fadeOut(500, function(){
      $(this).attr('src', images[currentIndex]).fadeIn(500);
    });
  }, 3000);
});
  $(document).ready(function() {
    // Photo switcher
    const photos = [
      "images/slide1.jpg",
      "images/slide2.jpg",
      "images/slide3.jpg"
    ];
    let currentPhoto = 0;

    function showPhoto(index) {
      $("#switch-photo").attr("src", photos[index]).attr("alt", "Fotka " + (index + 1));
    }

    $("#prev-photo").click(function() {
      currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
      showPhoto(currentPhoto);
    });

    $("#next-photo").click(function() {
      currentPhoto = (currentPhoto + 1) % photos.length;
      showPhoto(currentPhoto);
    });

    // Slider
    const sliderImages = [
      "slider1.jpg",
      "slider2.jpg",
      "slider3.jpg"
    ];
    let currentSlide = 0;

    function updateSlider() {
      $(".slider img").hide().eq(currentSlide).show();
    }

    $(".slider img").hide().eq(0).show();

    $("#prev-slide").click(function() {
      currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
      updateSlider();
    });

    $("#next-slide").click(function() {
      currentSlide = (currentSlide + 1) % sliderImages.length;
      updateSlider();
    });

    // Responsive menu toggle
    $("#menu-toggle").click(function() {
      $("#main-menu ul").toggle();
    });
  });
  