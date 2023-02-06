//Azra Fadhil Shadiq
//10122319
//IF 9

const homeItem = document.getElementById("home-item");
const operatorsItem = document.getElementById("operators-item");
const equipmentItem = document.getElementById("equipment-item");
const missionsItem = document.getElementById("missions-item");
const settingsItem = document.getElementById("settings-item");
const defender = document.getElementById("defender");
const medic = document.getElementById("medic");
const suporter = document.getElementById("suporter");
const specialist = document.getElementById("specialist");
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
  defender.classList.add("animated-out")
  medic.classList.add("animated-out")
  suporter.classList.add("animated-out")
  specialist.classList.add("animated-out")
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
  defender.classList.add("animated-out")
  medic.classList.add("animated-out")
  suporter.classList.add("animated-out")
  specialist.classList.add("animated-out")
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Guard/guard.html";
  }, 600); 
});
operatorsItem.addEventListener("mouseover", () => {
  popupImage.src = "../gambar/Guard.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Guard merupakan operator kuat yang memungkinkan menjaga barisan depan, atau mengeksekusi para musuh dengan damage besar";
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
  defender.classList.add("animated-out")
  medic.classList.add("animated-out")
  suporter.classList.add("animated-out")
  specialist.classList.add("animated-out")
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Vanguard/vanguard.html";
  }, 600); 
});
equipmentItem.addEventListener("mouseover", () => {
  popupImage.src = "../gambar/Vanguard.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Vanguard merupakan operator yang dapat dikeluarkan dengan cepat dan mampu menahan barisan meskipun tidak sekuat guard ";
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
    window.location = "./Sniper/sniper.html";
  }, 600); 
});
missionsItem.addEventListener("mouseover", () => {
  popupImage.src = "../gambar/Sniper.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Sniper adalah operator yang menyerang dengan menembakan proyektil kepada musuh, operator ini memiliki jangkauan serang yang sangat jauh dan mereka akan memprioritaskan menyerang musuh musuh yang menggunakan drone";
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
  defender.classList.add("animated-out")
  medic.classList.add("animated-out")
  suporter.classList.add("animated-out")
  specialist.classList.add("animated-out")
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Caster/caster.html";
  }, 600); 
});
settingsItem.addEventListener("mouseover", () => {
  amiyaContainer.style.display = "block";
  popupImage.src = "../gambar/Caster.webp";
  popupImageContainer.style.display = "block";
  explanatoryText.innerHTML = "Caster adalah operator yang menyerang musuh sama seperti caster, mereka akan menembakan proyektil tetapi menggunakan arts damage, serangan ini mampu untuk menembus musuh yang memiliki pertahan dan armor yang besar";
});
settingsItem.addEventListener("mouseout", () => {
  popupImageContainer.style.display = "none";
  explanatoryText.innerHTML = "";
});

defender.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  defender.classList.add("animated-out")
  medic.classList.add("animated-out")
  suporter.classList.add("animated-out")
  specialist.classList.add("animated-out")
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Defender/defender.html";
  }, 600); 
});
defender.addEventListener("mouseover", () => {
  popupImage.src = "../gambar/Defender.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Defender adalah operator yang memiliki pertahan armor, dan darah yang sangat tinggi, mereka mampu menahan para musuh dan melindungi para operator lain yang berada di belakang mereka";
});
defender.addEventListener("mouseout", () => {
  explanatoryText.innerHTML = "";
  popupImageContainer.style.display = "none";

});

medic.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  defender.classList.add("animated-out")
  medic.classList.add("animated-out")
  suporter.classList.add("animated-out")
  specialist.classList.add("animated-out")
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Medic/medic.html";
  }, 600); 
});
medic.addEventListener("mouseover", () => {
  popupImage.src = "../gambar/Medic.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Medic operator adalah operator yang membantu operator lain dengan memberikan pengobatan(Healing) di medan tempur, dan dapat meningkatkan deffend dan juga ressistance untuk menahan arts damage";
});
medic.addEventListener("mouseout", () => {
  explanatoryText.innerHTML = "";
  popupImageContainer.style.display = "none";
});

suporter.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  defender.classList.add("animated-out")
  medic.classList.add("animated-out")
  suporter.classList.add("animated-out")
  specialist.classList.add("animated-out")
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Supporter/supporter.html";
  }, 600); 
});
suporter.addEventListener("mouseover", () => {
  popupImage.src = "../gambar/Supporter.webp";
  popupImageContainer.style.display = "block";
  amiyaContainer.style.display = "block";
  explanatoryText.innerHTML = "Supporter operator memiliki keunikan, mereka memiliki kemampuan untuk membantu operator lain seperti memberikan buff seperti damage, deffend dan resistance tambahan kepada operator lain, mengurangi deffend atau art resistance musuh, dan memperlambat pergerakan musuh";
});
suporter.addEventListener("mouseout", () => {
  explanatoryText.innerHTML = "";
  popupImageContainer.style.display = "none";
});

specialist.addEventListener("click", () => {
  homeItem.classList.add("animated-out");
  operatorsItem.classList.add("animated-out");
  equipmentItem.classList.add("animated-out");
  missionsItem.classList.add("animated-out");
  settingsItem.classList.add("animated-out");
  defender.classList.add("animated-out")
  medic.classList.add("animated-out")
  suporter.classList.add("animated-out")
  specialist.classList.add("animated-out")
  amiyaContainer.classList.add("slide-out");
  setTimeout(() => {
    window.location = "./Specialist/specialist.html";
  }, 600); 
});
specialist.addEventListener("mouseover", () => {
  amiyaContainer.style.display = "block";
  popupImage.src = "../gambar/Specialist.webp";
  popupImageContainer.style.display = "block";
  explanatoryText.innerHTML = "Specialist operator juga memiliki keunikan karena kemampuan mereka yang berbeda beda, mereka tidak selalu dibawa dalam setiap operasi, tetapi mereka dapat mendominasi suatu operasi jika dokter mampu menggunakan strategi yang cocok";
});
specialist.addEventListener("mouseout", () => {
  popupImageContainer.style.display = "none";
  explanatoryText.innerHTML = "";
});












window.onload = function() {
    const menu = document.querySelector('.menu');
    const amiyaContainer = document.querySelector(".Amiya-container");
  
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
  
  
