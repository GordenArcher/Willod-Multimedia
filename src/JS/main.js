const mobile = document.querySelector(".mobile");
const headerNav = document.querySelector(".myyh");
const video_watch = document.querySelector(".video_watch");
const main_video = document.querySelector(".sh_video");
const closeVid = document.querySelector(".close");
const to_top = document.querySelector(".to_top");
const to_topbut = document.querySelector("#top");
const moreWork = document.getElementById("view_wok");

moreWork.addEventListener("click", () => {
  window.location.href = "/src/pages/work.html";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    to_top.style.display = "block";
    to_topbut.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    to_top.style.display = "none";
  }
});

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

const fq1 = document.querySelector(".fq1");
const fq2 = document.querySelector(".fq2");
const fq3 = document.querySelector(".fq3");
const f1 = document.querySelector(".f1");
const f2 = document.querySelector(".f2");
const f3 = document.querySelector(".f3");
const questIcon1 = document.querySelector(".ic1");
const questIcon2 = document.querySelector(".ic2");
const questIcon3 = document.querySelector(".ic3");

f1.addEventListener("click", () => {
  fq1.classList.toggle("expanded");
  questIcon1.classList.toggle("rotated");
});

f2.addEventListener("click", () => {
  fq2.classList.toggle("expanded");
  questIcon2.classList.toggle("rotated");
});

f3.addEventListener("click", () => {
  fq3.classList.toggle("expanded");
  questIcon3.classList.toggle("rotated");
});
