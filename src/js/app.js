import mQ from './functions/mediaQueries';
import SmoothScroll from 'smooth-scroll';

const hamburgerButton = document.getElementById('hamburger-button');
const mainMenu = document.getElementById('main-menu');

hamburgerButton.addEventListener('click', function () {
    if(!mQ.lg.matches) {
        console.log(this);
        this.classList.toggle('is-active');
        mainMenu.classList.toggle('is-active');
    }
});

const scroll = new SmoothScroll('a[href*="#"]');