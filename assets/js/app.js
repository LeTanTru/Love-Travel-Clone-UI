// The Beaches Slider
const changeBtns = document.querySelectorAll(".change-btns .change-btn");
const images = [
  "./assets/img/package-3.jpg",
  "./assets/img/parallax-4.jpg",
  "./assets/img/parallax-4-1.jpg",
];
const changeImage = 
            document.querySelector(".proposals-beaches__picture--image-img");
changeBtns[0].classList.add('active');
// Button change image
changeBtns[0].onclick = () => {
  for (let i = 0; i < changeBtns.length; i++) {
    changeBtns[i].classList.remove("active");
  }
  changeImage.src = images[0];
  changeBtns[0].classList.add("active");
};

changeBtns[1].onclick = () => {
  for (let i = 0; i < changeBtns.length; i++) {
    changeBtns[i].classList.remove("active");
  }
  changeBtns[1].classList.add("active");
  changeImage.src = images[1];
};

changeBtns[2].onclick = () => {
  for (let i = 0; i < changeBtns.length; i++) {
    changeBtns[i].classList.remove("active");
  }
  changeBtns[2].classList.add("active");
  changeImage.src = images[2];
};
// Auto change beach image
let count = 0;
let repeater = ()=>{
   change = setInterval(()=>{
     changeBtns.forEach((changeBtn)=>{
       changeBtn.classList.remove('active');
     })
     if(count > (images.length - 1)) {
       count = 0;
     }
     changeBtns[count].classList.add('active');
     changeImage.src = images[count];
    count++;
   }, 3000);
}
repeater();
// Stop auto changeImg
changeImage.addEventListener('mouseover',()=>{
  clearInterval(change);
});
// Continue auto changeImg
changeImage.addEventListener('mouseout',()=>{
  repeater();
})
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

