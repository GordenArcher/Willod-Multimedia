const mobile = document.getElementById("mobile");
const nav_links = document.querySelector(".nav_links");

mobile.addEventListener("click", () => {
  nav_links.classList.toggle("moble_active");
});

const listenVid = document.querySelector(".video_pop");
const closeVideo = document.getElementById("closeVid");
const listen = document.getElementById("listen");

listen.addEventListener("click", () => {
  listenVid.classList.add("show_vid");
});

closeVideo.addEventListener("click", () => {
  listenVid.classList.remove("show_vid");
});
