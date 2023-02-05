const homeItem = document.getElementById("home-item");
const operatorsItem = document.getElementById("operators-item");
const equipmentItem = document.getElementById("equipment-item");
const missionsItem = document.getElementById("missions-item");
const settingsItem = document.getElementById("settings-item");
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
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Lore/Lore Arknights.html";
  }, 600); 
});
homeItem.addEventListener("mouseover", () => {
  popupImage.src = "./gambar/Lore.png";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Ooh, Ini adalah catatan perjalan yang kami lalui sejauh ini, Meskipun tidak begitu detail tetapi Dokter Kal'tsit merangkum setiap kejadian tersebut seperti cerita";
});
homeItem.addEventListener("mouseout", () => {
  explanatoryText.innerHTML = "";
  popupImageContainer.style.display = "none";
});

operatorsItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Operator/Operator Arknights.html";
  }, 600); 
});
operatorsItem.addEventListener("mouseover", () => {
  popupImage.src = "./gambar/anniv.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Ini adalah informasi informasi tentang para operator yang berada di Rhodes Island atau yang berkerja sama dengan kami";
});
operatorsItem.addEventListener("mouseout", () => {
  explanatoryText.innerHTML = "";
  popupImageContainer.style.display = "none";

});

equipmentItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Dunia/Dunia Arknights.html";
  }, 600); 
});
equipmentItem.addEventListener("mouseover", () => {
  popupImage.src = "./gambar/Terra_World_Map.png";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Ini merupakan catatan dan pengetahuan dari keadaan geografi dunia Terra, beserta dengan negara, ras, dan juga kebangasaan yang berada di dunia Terra";
});
equipmentItem.addEventListener("mouseout", () => {
  explanatoryText.innerHTML = "";
  popupImageContainer.style.display = "none";
});

missionsItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Gameplay/gameplay.html";
  }, 600); 
});
missionsItem.addEventListener("mouseover", () => {
  popupImage.src = "./gambar/arknights-eyja.gif";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Ini merupakan rekaman operasi yang kami lakukan saat bertugas. Ah disinia juga tuan bisa melihat seperti apa kami bekerja dan beroperasi";
});
missionsItem.addEventListener("mouseout", () => {
  explanatoryText.innerHTML = "";
  popupImageContainer.style.display = "none";
});

settingsItem.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Tentang Arknights/Tentang Arknights.html";
  }, 600); 
});
settingsItem.addEventListener("mouseover", () => {
  amiyaContainer.style.display = "block";
  popupImage.src = "./gambar/Arknight.png";
  popupImageContainer.style.display = "block";
  explanatoryText.innerHTML = "Pengetahuan lebih lanjut tentang Game Arknights";
});
settingsItem.addEventListener("mouseout", () => {
  popupImageContainer.style.display = "none";
  explanatoryText.innerHTML = "";
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
      playButton.src = "./gambar/unmute.png";
      playButton.classList.remove("play");
      playButton.classList.add("pause");
    } else {
      myAudio.pause();
      playButton.src = "./gambar/mute.png";
      playButton.classList.remove("pause");
      playButton.classList.add("play");
    }
  }
  
  