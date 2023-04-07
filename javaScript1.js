

if ( window.location.pathname == "index.html") {
  window.addEventListener('load', function() {
    alert('Welcome to my website!');
  });
}

const menuBar = document.querySelector('nav.menu');
// function setButtonColors() {
    // Normal mode button
    const normalModeButton = document.getElementById("normal-mode");
    normalModeButton.addEventListener("click", function() {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelectorAll('p').forEach(function(p) {
        p.style.backgroundColor = "#edf9fa";
      });
      menuBar.style.backgroundColor = "#277284";
    });
  
    // Dark mode button
    const darkModeButton = document.getElementById("dark-mode");
    darkModeButton.addEventListener("click", function() {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "orange";
      document.querySelectorAll('p').forEach(function(p) {
        p.style.backgroundColor = "transparent";
      });
      menuBar.style.backgroundColor = "black";
    
    });
  
    // High contrast mode button
    const highContrastModeButton = document.getElementById("high-contrast-mode");
    highContrastModeButton.addEventListener("click", function() {
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black";
      document.querySelectorAll('p').forEach(function(p) {
        p.style.backgroundColor = "transparent";
      });
      menuBar.style.backgroundColor = "black";
    });
  
  
    const hidePhotosButton = document.getElementById('hidePhotosButton');
    const gallery = document.querySelector('.gallery');
    
    hidePhotosButton.addEventListener('click', function() {
      const confirmHide = confirm('Are you sure you want to hide the photos?');
      
      if (confirmHide) {
        gallery.style.display = 'none';
      }
    });

    const timeButton = document.getElementById('time-button');
    const timeDisplay = document.getElementById('time-display');

  function updateTimeDisplay() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeDisplay.textContent = `The current time is ${timeString}.`;
}

timeButton.addEventListener('click', updateTimeDisplay);


/*Reference taken from W3Schools*/

  const images = ["skywallpaper.jpg", "Sunrise.jpeg" ];
  let currentImageIndex = 0;
  const imageElement = document.getElementById("myImage");

  function changeImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    imageElement.src = images[currentImageIndex];
  }

  setInterval(changeImage, 5000); // Change image every 5 seconds


