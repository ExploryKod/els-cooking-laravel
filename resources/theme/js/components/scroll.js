import { $ } from '../common/variables'

export const scrollToId = () => {
  $("a[href^='#']:not([href='#'])").click(function (e) {
    e.preventDefault()
    this.blur()
    const hash = this.hash
    const section = $(hash)

    const $header = $('.mainHeader') // Le header
    const heightOffset = 0 // Offset pour créer un espace entre le header et l'ancre

    const $headerHeight = $header.outerHeight()

    if (hash) {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: section.offset().top - $headerHeight - heightOffset
          },
          1000,
          'swing',
          function () {
            if (hash !== '#homepage') {
              history.replaceState({}, '', hash)
            } else {
              history.replaceState({}, '', '/')
            }
          }
        )
    }
  })
}
