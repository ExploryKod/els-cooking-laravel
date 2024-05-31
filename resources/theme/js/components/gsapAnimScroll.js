const reveal = document.querySelectorAll('.text-anim-wrapper')

export const gsapTitleAnim = () => {
  reveal.forEach((el) => {
    const headings = el.querySelectorAll('.text-anim-wrapper .animated-title')

    const tl = gsap.timeline().from(headings, { y: 80, stagger: 0.05, opacity: 0, duration: 1, ease: 'power3.out' })
    ScrollTrigger.create({
      trigger: el,
      start: 'center 100%',
      end: 'top 50%',
      markers: false,
      toggleActions: 'play none none reverse ',
      animation: tl
    })
  })
}


import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const links = gsap.utils.toArray('.menu__nav-item a')

export const gsapHeaderLinksOnScroll = () => {
  links.forEach((a) => {
    const element = document.querySelector(a.dataset.hash)
    ScrollTrigger.create({
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => self.isActive && setActive(a)
    })
  })
}

function setActive(link) {
  links.forEach((el) => el.classList.remove('active-header-link'))
  link.classList.add('active-header-link')
}
