/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav-close');

/* Menu show */

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    //when ew click on each nav__link, we remove the show-menu click
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SWIPER SERVICES ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/