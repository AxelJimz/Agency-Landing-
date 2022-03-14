const $NAV_MENU = document.querySelector(".nav-menu");
const $ICON_MENU = document.querySelector(".icon-menu");
const $NAV_UL = document.querySelector(".nav-ul");

let visibleNavUl = false;

const isVisibleNavUl = () => {
    if (visibleNavUl === false) {
        $NAV_UL.classList.add("nav-ul--visible");
        $ICON_MENU.src = "src/images/icons/close-black.png";
        visibleNavUl = true;
    } else {
        $NAV_UL.classList.remove("nav-ul--visible");
        $ICON_MENU.src = "src/images/icons/menu-black.png";
        visibleNavUl = false;
    }
};

$NAV_MENU.addEventListener("click", isVisibleNavUl);