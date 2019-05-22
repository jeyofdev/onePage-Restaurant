// import app js
import { NavScroll } from '@js/app/NavScroll.js'
import { ToggleButton } from '@js/app/ToggleButton'
import { Logo } from '@js/app/Logo'
import { TopNav } from '@js/app/TopNav'

// import libraries
require('jquery.easing')

// import library plugins individually
require('@js/vendor/bootstrap.js')

// code js
let navScroll = new NavScroll('#mainNav', '#navbarResponsive', '.js-scroll-trigger')
navScroll.init()

let toggleButton = new ToggleButton('#navToggle', '#navbarResponsive', '.navbar-nav', '.js-scroll-trigger')
toggleButton.init()

let logo = new Logo('#mainNav .container', '.navbar-nav', 'li', 'nav-item')
logo.init()

let topNav = new TopNav('#mainNav', 50, 100)
topNav.init()

/**
 * allows to use an event several times
 */
let options = {
  connect: (oElem, sEvType, fn, bCapture) => {
    return document.addEventListener
      ? oElem.addEventListener(sEvType, fn, bCapture)
      : oElem.attachEvent
        ? oElem.attachEvent('on' + sEvType, fn)
        : false
  },
  firstTime: () => {
    toggleButton.resize()
  },
  secondTime: () => {
    logo.resize()
  }
}

options.connect(window, 'resize', options.firstTime, false)
options.connect(window, 'resize', options.secondTime, false)
