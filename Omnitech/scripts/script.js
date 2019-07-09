const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];
window.addEventListener('scroll', toggleHEader, false);

function toggleHEader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        console.log('header menor')
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
        $menu.firstElementChild.classList.remove('max-hambuerguer');
        $menu.firstElementChild.classList.add('min-hambuerguer');
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        console.log('header maior')
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');
        $menu.firstElementChild.classList.add('max-hambuerguer');
        $menu.firstElementChild.classList.remove('min-hambuerguer');
    }
}

$menu.addEventListener('click', toggleMenu, false);
var isOpen = false;

function toggleMenu() {
    if (!isOpen) {
        $navBar.classList.add('menu-opened');
        $menu.firstElementChild.classList.add('close-btn');
        isOpen = true;
    } else {
        $navBar.classList.remove('menu-opened');

        isOpen = false;
    }
}

$navBar.addEventListener('click', navClick, false);

function navClick(evt) {
    if (evt.target.tagName == 'A') {
        toggleMenu();
    }
}