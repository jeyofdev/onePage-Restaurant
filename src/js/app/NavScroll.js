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
    var that = this

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash)
        var targetId = $(this).attr('href')
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')

        if (target.length) {
          that.responsiveAnimateScrolling(target, targetId)
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

  /**
   * set the smooth scrolling animation depending on the size of the screen
   * @param {object} target the target of the clicked link
   * @param {string} targetId the id of the target
   */
  responsiveAnimateScrolling (target, targetId) {
    let navHeight = $('#mainNav').outerHeight()
    let screenWidth = ($(document).outerWidth(true))

    if (screenWidth < 992) {
      if (targetId !== '#page-top') {
        navHeight = 0
        this.animateScrolling(target, 1000, 'easeInOutExpo', navHeight)
      } else {
        this.animateScrolling(target, 1000, 'easeInOutExpo', navHeight)
      }
    } else {
      if (navHeight === 105) {
        if (targetId !== '#page-top') {
          navHeight = 0
          this.animateScrolling(target, 1000, 'easeInOutExpo', navHeight)
        } else {
          this.animateScrolling(target, 1000, 'easeInOutExpo', navHeight)
        }
      } else {
        if (targetId !== '#page-top') {
          navHeight = 0
          this.animateScrolling(target, 1000, 'easeInOutExpo', navHeight)
        } else {
          navHeight = navHeight + this.convertEmToPx(1.25)
          this.animateScrolling(target, 1000, 'easeInOutExpo', navHeight)
        }
      }
    }
  }

  /**
   * set the smooth scrolling animation
   * @param {object} target the target of the clicked link
   * @param {number} duration the duration of the animation
   * @param {string} easing the easing
   * @param {number} navHeight the height of the nav
   */
  animateScrolling (target, duration, easing, navHeight) {
    $('html, body').animate({
      scrollTop: (target.offset().top - navHeight)
    }, duration, easing)
  }

  /**
   * convert em to px
   * @param {number} base default value of the browser (16px)
   * @param {number} value value in em to convert
   */
  convertEmToPx (value, base = 16) {
    var px = value * base
    return px
  }
}
