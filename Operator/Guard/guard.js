const homeItem = document.getElementById("home-item");
const chen = document.getElementById("chen");



//clickable charakter
chen.addEventListener("click", function() {
  homeItem.classList.add("animated-out");
    chen.classList.add("animated-out");
    setTimeout(() => {
   window.location.href = "./chen/chen.html";
  }, 600);
});


//audio
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

  //tombol back
  homeItem.addEventListener("click", () => {
    homeItem.classList.add("animated-out");
    chen.classList.add("animated-out");
     setTimeout(() => {
      window.location = "../Operator Arknights.html";
    }, 600); 
  });
  homeItem.addEventListener("mouseover", () => {
  });
  homeItem.addEventListener("mouseout", () => {
  });

  window.onload = function() {
    const menu = document.querySelector('.menu');
  
    menu.classList.add("menu-animation");
  }