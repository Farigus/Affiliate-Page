let buttonMenu = document.getElementById("header__menu_button");
let burgerMenu = document.getElementById("header__menu_burger");
let isMenuOpen = false;

// document.onclick = (e) => {
//   console.log(e.target.tag);
//   if (e.target !== burgerMenu && isMenuOpen == true) {
//     isMenuOpen = false;
//     burgerMenu.style.display = "none";
//   }
// };

document.onclick = (event) => {
  if (isMenuOpen == true) {
    if (
      event.target.id != "header__menu_button" &&
      event.target.tagName != "A" &&
      event.target.tagName != "LI" &&
      event.target.id != "header__menu_img"
    ) {
      isMenuOpen = false;
      burgerMenu.style.display = "none";
    }
  }
};

buttonMenu.onclick = () => {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    switch (isMenuOpen) {
      case false:
        isMenuOpen = true;
        burgerMenu.style.display = "block";
        break;
      case true:
        isMenuOpen = false;
        burgerMenu.style.display = "none";
        break;
    }
  } else {
    isMenuOpen = false;
    burgerMenu.style.display = "none";
  }
};

function testScreenWide() {
  if (!window.matchMedia("(max-width: 1000px)").matches) {
    isMenuOpen = false;
    burgerMenu.style.display = "none";
  }
}

testScreenWide();
setInterval(testScreenWide, 10);
