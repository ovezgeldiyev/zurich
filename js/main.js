// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// video start
const playBtn = document.getElementById("play");
if (playBtn) {
  const banner = document.getElementById("banner");
  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  };
}
// video end
const register = document.getElementById("register");
if (register) {
  const hideShow = document.querySelectorAll(".hideShow");
  const clickHideShow = (item) => {
    item.addEventListener("click", () => {
      let input = item.parentElement;

      const inputItem = input.querySelector("input");
      if (inputItem.type === "password") {
        inputItem.type = "text";
        item.classList.add("active");
      } else {
        inputItem.type = "password";
        item.classList.remove("active");
      }
    });
  };

  hideShow.forEach((e) => {
    clickHideShow(e);
  });
}

