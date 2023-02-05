const image = document.getElementById("image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const homeItem = document.getElementById("home-item");
const text = document.getElementById("text-box");

let currentImageIndex = 0;
const images = ["../../gambar/Arknight.png"];

prevBtn.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  image.src = images[currentImageIndex];
});

nextBtn.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  image.src = images[currentImageIndex];
});

homeItem.addEventListener("click", () => {
    homeItem.classList.add("animated-out");
    image.classList.add("animated-out");
    prevBtn.classList.add("animated-out");
    nextBtn.classList.add("animated-out");
    text.classList.add("slide-out")
    setTimeout(() => {
      window.location = "../Lore Arknights.html";
    }, 600); 
  });
  homeItem.addEventListener("mouseover", () => {
  });
  homeItem.addEventListener("mouseout", () => {
  });

  window.onload = function() {
    const menu = document.querySelector('.menu');
    const amiyaContainer = document.querySelector(".Amiya-container");
  
    menu.classList.add("menu-animation");
    text.classList.add("text-animation");
  }

  let myAudio = document.getElementById("myAudio");
  let playButton = document.getElementById("playButton");
  
  function playPause() {
    if (myAudio.paused) {
      myAudio.play();
      playButton.src = "../../gambar/unmute.png";
      playButton.classList.remove("play");
      playButton.classList.add("pause");
    } else {
      myAudio.pause();
      playButton.src = "../../gambar/mute.png";
      playButton.classList.remove("pause");
      playButton.classList.add("play");
    }
  }