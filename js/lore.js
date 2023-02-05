const homeItem = document.getElementById("home-item");
const operatorsItem = document.getElementById("operators-item");
const equipmentItem = document.getElementById("equipment-item");
const missionsItem = document.getElementById("missions-item");
const settingsItem = document.getElementById("settings-item");
const episode4Item = document.getElementById("episode4-item");
const episode5Item = document.getElementById("episode5-item");
const episode6Item = document.getElementById("episode6-item");
const episode7Item = document.getElementById("episode7-item");
const episode8Item = document.getElementById("episode8-item");
const amiyaContainer = document.querySelector(".Amiya-container");
const explanatoryText = document.getElementById("explanatory-text");
const popupImageContainer = document.getElementById("popup-image-container");
const popupImage = document.getElementById("popup-image");


homeItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  episode4Item.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "../Menu.html";
  }, 600); 
});
homeItem.addEventListener("mouseover", () => {
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Kau Ingin Kembali ?";
});
homeItem.addEventListener("mouseout", () => {
  explanatoryText.innerHTML = "";
});

operatorsItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  episode4Item.classList.add("animated-out");
  setTimeout(() => {
    window.location = "./Prologue/prologue.html";
  }, 600); 
});
operatorsItem.addEventListener("mouseover", () => {
  popupImage.src = "./Prologue.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
});
operatorsItem.addEventListener("mouseout", () => {
  popupImageContainer.style.display = "none";

});

equipmentItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  episode4Item.classList.add("animated-out");
  setTimeout(() => {
    window.location = "./Episode 1/Episode1.html";
  }, 600); 
});
equipmentItem.addEventListener("mouseover", () => {
  popupImage.src = "./Episode_01.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
});
equipmentItem.addEventListener("mouseout", () => {
  popupImageContainer.style.display = "none";
});

missionsItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  episode4Item.classList.add("animated-out");
  setTimeout(() => {
    window.location = "./Episode 2/Episode2.html";
  }, 600); 
});
missionsItem.addEventListener("mouseover", () => {
  popupImage.src = "./Episode_02.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
});
missionsItem.addEventListener("mouseout", () => {
  popupImageContainer.style.display = "none";
});

settingsItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  episode4Item.classList.add("animated-out");
  setTimeout(() => {
    window.location = "./Episode 3/Episode3.html";
  }, 600); 
});
settingsItem.addEventListener("mouseover", () => {
  amiyaContainer.style.display = "block";
  popupImage.src = "./Episode_03.webp";
  popupImageContainer.style.display = "block";
});
settingsItem.addEventListener("mouseout", () => {
  popupImageContainer.style.display = "none";
});

episode4Item.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  episode4Item.classList.add("animated-out");
  setTimeout(() => {
    window.location = "./Episode 4/Episode4.html";
  }, 600); 
});
episode4Item.addEventListener("mouseover", () => {
  amiyaContainer.style.display = "block";
  popupImage.src = "./Episode_04.webp";
  popupImageContainer.style.display = "block";
});
episode4Item.addEventListener("mouseout", () => {
  popupImageContainer.style.display = "none";
});






window.onload = function() {
    const menu = document.querySelector('.menu');
    const amiyaContainer = document.querySelector(".Amiya-container");
  
    // Add animation classes to the menu and Amiya-container element
    menu.classList.add("menu-animation");
    amiyaContainer.classList.add("Amiya-container-animation");
  }

  let myAudio = document.getElementById("myAudio");
  let playButton = document.getElementById("playButton");
  
  function playPause() {
    if (myAudio.paused) {
      myAudio.play();
      playButton.src = "../gambar/unmute.png";
      playButton.classList.remove("play");
      playButton.classList.add("pause");
    } else {
      myAudio.pause();
      playButton.src = "../gambar/mute.png";
      playButton.classList.remove("pause");
      playButton.classList.add("play");
    }
  }
  
  