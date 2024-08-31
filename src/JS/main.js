const mobile = document.querySelector(".mobile");
const headerNav = document.querySelector(".myyh");
const video_watch = document.querySelector(".video_watch");
const main_video = document.querySelector(".sh_video");
const closeVid = document.querySelector(".close");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    headerNav.classList.add("heaaa");
  } else {
    headerNav.classList.remove("heaaa");
  }
});

main_video.addEventListener("click", () => {
  video_watch.classList.add("show_vid");
});

closeVid.addEventListener("click", () => {
  video_watch.classList.remove("show_vid");
});
