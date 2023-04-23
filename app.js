const fadeIng = document.querySelectorAll(".fadeIn");
const footerList = document.querySelectorAll(".footer-list");

console.log(footerList);

window.addEventListener("scroll", fadeIn);

function fadeIn() {
  let fade = window.innerHeight / 1.2;

  fadeIng.forEach((appear) => {
    const element = appear.getBoundingClientRect().top;
    if (element < fade) {
      appear.classList.add("show");
    } else {
      appear.classList.remove("show");
    }
  });
  footerList.forEach((footer) => {
    fade = window.innerHeight / 1.2;
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < fade) {
      footer.classList.add("apear");
    } else {
      footer.classList.remove("apear");
    }
  });
}

const bars = document.querySelector(".fa-bars");
const menus = document.querySelector(".bar-toggle");
const nav = document.querySelector("nav");

bars.addEventListener("click", (e) => {
  menus.classList.toggle("come-down");
  nav.classList.toggle("navbar-toggle");
});
