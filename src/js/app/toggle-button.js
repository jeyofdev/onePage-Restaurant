export function toggleButton () {
  let toggleButton = new ToggleButton()
  toggleButton.init()
}

/**
 * Manage the responsive nav
 */
class ToggleButton {
  constructor () {
    this.windowWidth = window.innerWidth
    this.button = document.querySelector('#navToggle') // responsive button
    this.navbarCollapse = document.querySelector('#navbarResponsive')
    this.navbarNav = document.querySelector('.navbar-nav')
    this.links = document.querySelectorAll('.js-scroll-trigger') // nav links
  }

  /**
   * initialize the methods of the current class
   */
  init () {
    this.collapse()
    this.resize()

    if (this.windowWidth >= 992) {
      this.setOverlay(false)
    } else {
      this.setOverlay()
      this.links.forEach((currentValue, currentIndex) => {
        this.links[currentIndex].addEventListener('click', () => {
          this.button.classList.remove('is-active')
        })
      })
    }
  }

  /**
   * activate/disable the menu responsive button
   * and show/hide the overlay with an animation
   */
  collapse () {
    this.button.addEventListener('click', (e) => {
      this.button.classList.toggle('collapsed')
      this.button.classList.toggle('is-active')

      if (!this.button.classList.contains('is-active')) {
        this.navbarCollapse.style.animation = 'fadeOutLeft .5s forwards'
      } else {
        this.navbarCollapse.style.animation = 'fadeInLeft .5s forwards'
      }

      if (this.navbarCollapse.classList.contains('overlay')) {
        this.navbarCollapse.classList.toggle('hide')
      } else {
        this.navbarCollapse.classList.add('hide')
      }
    })
  }

  /**
   * disable responsive menu button on large screens
   *
   */
  resize () {
    window.onresize = () => {
      this.windowWidth = window.innerWidth

      if (this.windowWidth >= 992) {
        this.button.classList.remove('is-active')
        this.button.classList.add('collapsed')
        this.setOverlay(false)
        this.navbarCollapse.classList.remove('show')
      } else {
        this.setOverlay(true)
      }
    }
  }

  /**
   * add the overlay in mobile mode
   *
   * @param {Boolean} mobile
   */
  setOverlay (mobile = true) {
    if (mobile) {
      this.navbarCollapse.classList.add('overlay')
      this.navbarNav.classList.add('overlay-content')
      this.navbarCollapse.style.background = '#000'
    } else {
      this.navbarCollapse.classList.remove('overlay')
      this.navbarNav.classList.remove('overlay-content')
      this.navbarCollapse.style.background = 'transparent'
      this.navbarCollapse.style.height = 'auto'
      this.navbarCollapse.style.animation = 'none'
    }
  }
}
