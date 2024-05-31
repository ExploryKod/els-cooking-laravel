// eslint-disable-next-line no-unused-vars
import { variables } from './variables'

export const putScrollbarSizeInCSSVariables = () => {
  let timeout = false
  const delay = 250
  window.addEventListener('resize', () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      document.documentElement.style.setProperty('--scrollbarsize', `${window.innerWidth - document.documentElement.clientWidth}px`)
    }, delay)
  })
  setTimeout(() => {
    document.documentElement.style.setProperty('--scrollbarsize', `${window.innerWidth - document.documentElement.clientWidth}px`)
  }, 0)
}

export const minWidth = (value) => {
  return window.matchMedia(`(min-width: ${variables.breakpoints[value]})`).matches
}
