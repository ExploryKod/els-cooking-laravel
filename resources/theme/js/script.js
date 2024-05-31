import {$} from './common/variables'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { getSwiperJs } from './components/swiper'
import { modalToggle } from './components/modal'
import { putScrollbarSizeInCSSVariables } from './common/functions'
import { menuBurger } from './components/menuBurger'
// import { scrollToAnchor } from './components/scrollToAnchor'
import { scrollToId } from './components/scroll'
import { gsapHeaderLinksOnScroll, gsapTitleAnim } from './components/gsapAnimScroll'
import { displayLeafletMap } from './components/map';
import { makeBgImageTranslate } from "./components/bgImageTranslate";
import { showTabTarget } from "./components/showTabTarget";
import { makeToast } from "./components/toastify";

window.addEventListener('DOMContentLoaded', (event) => {

  try {
    let swiperSlides = document.querySelectorAll('.swiper-slide');

    swiperSlides.forEach(function (slide) {
      console.log('slide', slide)
      let imageId = slide.getAttribute('data-imageid');
      slide.style.background = "linear-gradient(to bottom, #2c536400, #203a4303, #0f2027cc), url('" + imageId + "') no-repeat 50% 50% / cover";
    });
    makeToast();
    showTabTarget();
    getSwiperJs()
    modalToggle()
    scrollToId()
    gsapHeaderLinksOnScroll()
    putScrollbarSizeInCSSVariables()
    menuBurger()
    displayLeafletMap()
    makeBgImageTranslate()
  } catch(error) {
    console.error(error)
  }

})
