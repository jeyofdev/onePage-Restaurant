// import jquery
import $ from 'jquery'

/**
 * manage the smooth scrolling by clicking on the links of the navbar
 */
export class NavScroll {
  constructor () {
    this.body = $('body')
    this.link = $('.js-scroll-trigger')
    this.navbarCollapse = $('.navbar-collapse')
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
    $('a').click(function () {
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
    this.body.scrollspy({
      target: '#mainNav'
    })
  }
}
