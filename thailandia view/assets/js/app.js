// Menu slide
const menuSlide = document.querySelector(".menu-slide");
const menuOverlay = document.querySelector(".wrapper__overlay");
const openMenuSlide = document.querySelector(".header__navbar-menu");
const closeMenuSlide = document.querySelector(".menu-slide__close-icon--img");  

openMenuSlide.addEventListener("click", () => {
  menuSlide.classList.add("open");
  menuOverlay.style.position = "fixed";
});

menuOverlay.onclick = () => {
  menuSlide.classList.remove("open");
  menuOverlay.style.position = "unset";
};

closeMenuSlide.addEventListener("click", () => {
  menuOverlay.style.position = "unset";
  menuSlide.classList.remove("open");
});

// Header_navbar-menu on mobile
const menuMobile = document.querySelector('.header__navbar-list--m');
const openMenuMobile = document.querySelector(".header__navbar-menu");
const closeMenuMobile = document.querySelector('.header__navbar-item--m-close--icon');

openMenuMobile.addEventListener('click',()=>{
  menuMobile.classList.add('open');
});

closeMenuMobile.addEventListener('click', ()=>{
  menuMobile.classList.remove('open');
  menuOverlay.style.position = 'unset'
});

menuOverlay.addEventListener('click', ()=>{
  menuMobile.classList.remove('open');
})

