const hrsHand = document.querySelector(".hrs-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

function currentDate() {
  const now = new Date();
  const hrs = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hrsDeg = (hrs / 12) * 360 + 90;
  const minDeg = (min / 60) * 360 + 90;
  const secDeg = (sec / 60) * 360 + 90;

  console.log(sec);

  sec === 0
    ? (secHand.style.transition = "none")
    : (secHand.style.transition = "all 0.05s");
  hrsHand.style.transform = `rotate(${hrsDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  secHand.style.transform = `rotate(${secDeg}deg)`;

  // hrsHand.classList.remove("no-transition");
  // minHand.classList.remove("no-transition");
  // secHand.classList.remove("no-transition");
}

// currentDate();
setInterval(currentDate, 1000);
