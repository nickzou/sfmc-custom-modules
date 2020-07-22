import mQ from './functions/mediaQueries';
import SmoothScroll from 'smooth-scroll';
import Swiper, {Navigation, Pagination} from 'swiper';

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

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
});