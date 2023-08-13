document.addEventListener("keydown", (e) => {
  const key = e.keyCode;
  const btn = document.querySelector(`div[data-key="${key}"]`);
  if (!btn) return;

  btn.classList.add("playing");
  const audio = document.querySelector(`audio[data-key='${key}']`);
  audio.currentTime = 0;
  audio.play();
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", () => key.classList.remove("playing"));
});
