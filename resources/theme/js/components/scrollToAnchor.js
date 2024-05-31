export const scrollToAnchor = () => {
    const element = document.querySelector(window.location.hash)
    if (element) {
      // Options à adapter selon vos besoins
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
      const options = {
        behavior: 'smooth',
        block: 'start'
      }
      element.scrollIntoView(options)
    }
  }