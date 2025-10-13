import {$} from './common/variables'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { getSwiperJs } from './components/swiper'
import { modalToggle } from './components/modal'
//import { putScrollbarSizeInCSSVariables } from './common/functions'
import { menuBurger } from './components/menuBurger'
// import { scrollToAnchor } from './components/scrollToAnchor'
import { scrollToId } from './components/scroll'
//import { gsapHeaderLinksOnScroll, gsapTitleAnim } from './components/gsapAnimScroll'
import { displayLeafletMap } from './components/map';
//import { makeBgImageTranslate } from "./components/bgImageTranslate";
import { showTabTarget } from "./components/showTabTarget";
import { makeToast } from "./components/toastify";

// Set background images for swiper slides
const setSwiperSlideBackgrounds = () => {
  let swiperSlides = document.querySelectorAll('.swiper-slide');
  swiperSlides.forEach(function (slide) {
    let imageId = slide.getAttribute('data-imageid');
    if (imageId) {
      slide.style.background = "linear-gradient(to bottom, #2c536400, #203a4303, #0f2027cc), url('" + imageId + "') no-repeat 50% 50% / cover";
    }
  });
  return swiperSlides.length;
};

// Initialize Swiper with retry logic for Livewire components
const initializeSwiperWithRetry = (retryCount = 0, maxRetries = 20) => {
  // Always set backgrounds before trying to initialize
  const slideCount = setSwiperSlideBackgrounds();
  
  const swiper = getSwiperJs();
  
  // If swiper didn't initialize (no slides found), retry after a short delay
  if (!swiper && retryCount < maxRetries) {
    setTimeout(() => {
      console.log(`Retrying Swiper initialization... (attempt ${retryCount + 1}/${maxRetries})`);
      initializeSwiperWithRetry(retryCount + 1, maxRetries);
    }, 100);
  } else if (!swiper) {
    console.warn('Failed to initialize Swiper after maximum retries. No slides found.');
  }
};

window.addEventListener('DOMContentLoaded', (event) => {

  try {
    makeToast();
    showTabTarget();
    initializeSwiperWithRetry()
    modalToggle()
    scrollToId()
    //gsapHeaderLinksOnScroll()
    //putScrollbarSizeInCSSVariables()
    menuBurger()
    displayLeafletMap()
    //makeBgImageTranslate()
  } catch(error) {
    console.error(error)
  }

})

// Also listen for Livewire load event if available
if (typeof Livewire !== 'undefined') {
  document.addEventListener('livewire:load', () => {
    console.log('Livewire loaded, initializing Swiper...');
    setSwiperSlideBackgrounds();
    getSwiperJs();
  });
}
