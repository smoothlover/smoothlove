const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const panda1 = document.getElementById("panda1");
const panda2 = document.getElementById("panda2");
const dialog = document.getElementById("dialogBox");

// Music
const music = new Audio("love_music.mp3");
music.loop = true;
music.play();

// No Button dodge
noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";
});

// Yes Button click
yesBtn.addEventListener("click", () => {
  panda1.classList.remove("shake");
  panda2.classList.remove("shake");
  panda1.classList.add("hug");
  panda2.classList.add("hug");
  dialog.innerText = "Aww, Love You Too! 💕";
});

// Panda keeps requesting
setInterval(() => {
  panda1.classList.toggle("shake");
}, 1000);

// Heart animation
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "90vh";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 500);

// Dialog change like reel timing
setTimeout(() => {
  dialog.innerText = "Please don't say NO 😭";
}, 3000);

setTimeout(() => {
  dialog.innerText = "Say YES and make me smile 💘";
}, 6000);
