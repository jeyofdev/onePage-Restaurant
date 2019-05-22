/**
 * Manage the responsive nav
 */
export class ToggleButton {
  /**
   * @param {string} button the responsive button
   * @param {string} navbarCollapse the navbar collapse
   * @param {string} navbarNav the parent element container links
   * @param {string} links the links of the nav
   */
  constructor (button, navbarCollapse, navbarNav, links) {
    this.button = document.querySelector(button)
    this.navbarCollapse = document.querySelector(navbarCollapse)
    this.navbarNav = document.querySelector(navbarNav)
    this.links = document.querySelectorAll(links)
  }

  /**
   * initialize the methods of the current class
   */
  init () {
    this.collapse()

    if (window.innerWidth >= 992) {
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
   * disable responsive menu button on large screens
   *
   */
  resize () {
    if (window.innerWidth >= 992) {
      this.button.classList.remove('is-active')
      this.button.classList.add('collapsed')
      this.setOverlay(false)
      this.navbarCollapse.classList.remove('show')
    } else {
      this.setOverlay(true)
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
