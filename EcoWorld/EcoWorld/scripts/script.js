const $navBar = document.querySelectorAll('.nav-bar')[0];
const $logo = document.querySelectorAll('.logo')[0];
window.addEventListener('scroll', toggleNavBar, false);

function toggleNavBar() {
    if (window.pageYOffset >= $logo.offsetHeight && $navBar.classList.contains('abs-pos')) {
        $navBar.classList.remove('abs-pos');
        $navBar.classList.add('fix-pos');
    } else if (window.pageYOffset < $logo.offsetHeight && $navBar.classList.contains('fix-pos')) {
        $navBar.classList.add('abs-pos');
        $navBar.classList.remove('fix-pos');
    }
}
//const $extLink = document.querySelectorAll('.ext-link')[0];
//$extLink.addEventListener('click', openLink, false);

//function openLink() {
//window.open('http://www.blogguer.com', '_blank');
//}


const $intLinks = document.querySelectorAll('.int-link a');
$intLinks.forEach(function(cur, ) {
    cur.addEventListener('click', function(evt) {
        evt.preventDefault();
        window.scrollTo({
            top: document.querySelector(cur.getAttribute('href')).offsetTop - $navBar.offsetHeight,
            left: '0',
            behavior: 'smooth'
        });
    }, false);
})