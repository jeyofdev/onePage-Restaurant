/**
 * manage the navbar according to the position of the scroll
 */
export class TopNav {
  /**
   * @param {string} className class of the navbar
   * @param {number} changeNavbarOn position of the scroll from which to apply the changes on the navbar
   * @param {number} duration delay
   */
  constructor (className, changeNavbarOn, delay) {
    this.docElem = document.documentElement
    this.navbar = document.querySelector(className)
    this.didScroll = false
    this.changeNavbarOn = changeNavbarOn
    this.delay = delay
  }

  /**
   * initialize the methods of the current class
   */
  init () {
    this.scroll()
  }

  /**
   * define the scroll event
   */
  scroll () {
    window.addEventListener('scroll', (e) => {
      if (!this.didScroll) {
        this.didScroll = true
        setTimeout(this.scrollPage(), this.delay)
      }
    }, false)
  }

  /**
   * add or delete a class on the navbar depending on the position of the scroll
   */
  scrollPage () {
    this.sy = this.scrollY()
    if (this.sy >= this.changeNavbarOn) {
      this.navbar.classList.add('top-nav-collapse')
    } else {
      this.navbar.classList.remove('top-nav-collapse')
    }
    this.didScroll = false
  }

  /**
   * Use the pageYOffset or scrollTop methods for better browser compatibility
   */
  scrollY () {
    return window.pageYOffset || this.docElem.scrollTop
  }
}
