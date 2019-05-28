// import jquery
import $ from 'jquery'

/**
 * manage the smooth scrolling by clicking on the links of the navbar
 */
export class NavScroll {
  /**
   * @param {string} target the parent element that use the smoothScrolling
   * @param {string} navbarCollapse the navbar collapse
   * @param {string} link the links that use the smoothScrolling
   */
  constructor (target, navbarCollapse, link) {
    this.target = target
    this.navbarCollapse = $(navbarCollapse)
    this.link = $(link)
  }

  /**
   * initialize the methods of the current class
   */
  init () {
    this.smoothScrolling()
    this.scrollTrigger()
    this.scrollspy()
  }

  /**
   * smooth scrolling using jQuery easing
   */
  smoothScrolling () {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, 'easeInOutExpo')
          return false
        }
      }
    })
  }

  /**
   * closes responsive menu when a scroll trigger link is clicked
   */
  scrollTrigger () {
    this.link.click(() => {
      this.navbarCollapse.collapse('hide')
    })
  }

  /**
   * activate scrollspy to add active class to navbar items on scroll
   */
  scrollspy () {
    $('body').scrollspy({
      target: this.target
    })
  }
}
