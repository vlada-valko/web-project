const menuList = document.querySelector(".menu__list");
const menuSotialMedia = document.querySelector('.menu__sotial-media');
const btn = document.querySelector('.menu-burger');
const body = document.querySelector('body');
const burger = document.querySelector('.menu-burger__lines');
const headerContent = document.querySelector('.header__content');

btn.addEventListener('click', () => {
    body.classList.toggle('menu-visible');
    menuList.classList.toggle('menu-visible');
    menuSotialMedia.classList.toggle('menu-visible');
    burger.classList.toggle('menu-visible');
    headerContent.classList.toggle('menu-visible');
});

function setMenuHeight() {
    if (window.innerWidth < 800) {
        const menuHeight = menuList.offsetHeight;
        document.documentElement.style.setProperty('--menu-height', menuHeight + 'px');
    }
}

setMenuHeight();

window.addEventListener('resize', setMenuHeight);


