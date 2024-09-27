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
const menuMobile = document.querySelector(".header__navbar-list--m");
const openMenuMobile = document.querySelector(".header__navbar-menu");
const closeMenuMobile = document.querySelector(
  ".header__navbar-item--m-close--icon"
);

openMenuMobile.addEventListener("click", () => {
  menuMobile.classList.add("open");
});

closeMenuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("open");
  menuOverlay.style.position = "unset";
});

menuOverlay.addEventListener("click", () => {
  menuMobile.classList.remove("open");
});

//Adjust bar price
const adjustBar = document.querySelector(
  "#header-search__select-price--adjust-bar"
);
const price = document.querySelector(
  "#header-search__select-price--heading-price--max"
);

adjustBar.oninput = () => {
  price.innerHTML = adjustBar.value + " $";
};

adjustBar.addEventListener("mousemove", () => {
  let nowPrice = adjustBar.value;
  let percent = (nowPrice * 100) / adjustBar.max;
  let color =
    "linear-gradient(to right, var(--blue-color) " +
    percent +
    "%, var(--gray-color) " +
    percent +
    "%)";
  adjustBar.style.backgroundImage = color;
});

adjustBar.addEventListener("input", () => {
  let nowPrice = adjustBar.value;
  let percent = (nowPrice * 100) / adjustBar.max;
  let color =
    "linear-gradient(to right, var(--blue-color) " +
    percent +
    "%, var(--gray-color) " +
    percent +
    "%)";
  adjustBar.style.backgroundImage = color;
});

// Show/Hide Calendar
const headerSelect = document.querySelector(".header-search__select");
const calendarInput = document.querySelector(
  "#header-search__select--date-input"
);
const calendar = document.querySelector(".header-search__calendar");
calendarInput.addEventListener("click", (e) => {
  let calendarTop = calendar.getBoundingClientRect().top;
  calendar.classList.toggle("open");
  if (calendarTop > 360) {
    calendar.style.top = -256 + "px";
    return;
  } else if (calendarTop < 0) {
    calendar.style.top = 45 + "px";
    calendar.classList.toggle("open");
    if (calendarTop > 0) {
      return;
    }
  }
  e.stopPropagation();
  e.preventDefault();
});

// Icon Img of Header From Opacity Low to 1
const iconImg = document.querySelectorAll(".header-filter__pick-icon--img");
const iconImgActives = [
  "./assets/img/icon-list-white.png",
  "./assets/img/icon-menu-white.png",
];
const iconImgNotActives = [
  "./assets/img/icon-menu-white-opacity.png",
  "./assets/img/icon-list-white-opacity.png",
];
//Promotion Items Show/Hide
const threeInRow = document.querySelector(
  ".promotions__destinations-three-in-row"
);
const twoInRow = document.querySelector(".promotions__destinations-two-in-row");
const priceItem = document.querySelectorAll(".header-filter__pick-price--item");
const priceItemLength = priceItem.length;
const lowestList = document.querySelector(".promotions__destinations-lowest");
const highestList = document.querySelector(".promotions__destinations-highest");
const zToaList = document.querySelector(".promotions__destinations-z-to-a");
const aTozList = document.querySelector(".promotions__destinations-a-to-z");
const promotionItems = document.querySelector(
  ".promotions__destinations-sale--off"
);
const displayPromotionItems = document.querySelector(
  '.header-search__select-price--choose input[type="checkbox"]'
);
// Show Two Items in a row
iconImg[0].addEventListener("click", () => {
  iconImg[0].src = iconImgActives[0];
  iconImg[1].src = iconImgNotActives[0];
  twoInRow.style.display = "unset";
  threeInRow.style.display = "none";
  lowestList.style.display = "none";
  highestList.style.display = "none";
  zToaList.style.display = "none";
  aTozList.style.display = "none";
  for (let i = 0; i < priceItemLength; i++) {
    priceItem[i].classList.remove("picked");
  }
});

// Show Three Items in a row
iconImg[1].addEventListener("click", () => {
  iconImg[1].src = iconImgActives[1];
  iconImg[0].src = iconImgNotActives[1];
  twoInRow.style.display = "none";
  threeInRow.style.display = "unset";
  lowestList.style.display = "none";
  highestList.style.display = "none";
  zToaList.style.display = "none";
  aTozList.style.display = "none";
  for (let i = 0; i < priceItemLength; i++) {
    priceItem[i].classList.remove("picked");
  }
});
//Show from lowest price to highest price
priceItem[0].addEventListener("click", () => {
  for (let i = 0; i < priceItemLength; i++) {
    priceItem[i].classList.remove("picked");
  }
  priceItem[0].classList.add("picked");
  lowestList.style.display = "unset";
  highestList.style.display = "none";
  threeInRow.style.display = "none";
  twoInRow.style.display = "none";
  zToaList.style.display = "none";
  aTozList.style.display = "none";
  iconImg[0].src = iconImgNotActives[1];
  iconImg[1].src = iconImgNotActives[0];
});

// Show from highest price to lowest price
priceItem[1].addEventListener("click", () => {
  for (let i = 0; i < priceItemLength; i++) {
    priceItem[i].classList.remove("picked");
  }
  priceItem[1].classList.add("picked");
  lowestList.style.display = "none";
  highestList.style.display = "unset";
  threeInRow.style.display = "none";
  twoInRow.style.display = "none";
  zToaList.style.display = "none";
  aTozList.style.display = "none";
  iconImg[0].src = iconImgNotActives[1];
  iconImg[1].src = iconImgNotActives[0];
});

//Show from z => a
priceItem[2].addEventListener("click", () => {
  for (let i = 0; i < priceItemLength; i++) {
    priceItem[i].classList.remove("picked");
  }
  priceItem[2].classList.add("picked");
  zToaList.style.display = "unset";
  aTozList.style.display = "none";
  lowestList.style.display = "none";
  highestList.style.display = "none";
  threeInRow.style.display = "none";
  twoInRow.style.display = "none";
  iconImg[0].src = iconImgNotActives[1];
  iconImg[1].src = iconImgNotActives[0];
});

//Show from a => z
priceItem[3].addEventListener("click", () => {
  for (let i = 0; i < priceItemLength; i++) {
    priceItem[i].classList.remove("picked");
  }
  priceItem[3].classList.add("picked");
  zToaList.style.display = "none";
  aTozList.style.display = "unset";
  lowestList.style.display = "none";
  highestList.style.display = "none";
  threeInRow.style.display = "none";
  twoInRow.style.display = "none";
  iconImg[0].src = iconImgNotActives[1];
  iconImg[1].src = iconImgNotActives[0];
});

//Show/Hide PromotionItems When Checkbox is Changed
displayPromotionItems.addEventListener("change", () => {
  if (displayPromotionItems.checked) {
    console.log(Math.random());
  }
});
