/**
 * manage the position of the logo
 */
export class Logo {
  constructor (navbar, listLinks, newLink, className) {
    this.navbar = document.querySelector(navbar) // navbar
    this.listLinks = document.querySelector(listLinks) // the element that contains the links
    this.newLink = document.createElement(newLink)
    this.newLink.className = className
  }

  /**
   * set the position of the logo
   */
  init () {
    if (window.innerWidth >= 992) {
      this.setLogo()
      this.moveLogoLg(9)
    } else {
      this.setLogo()
      this.moveLogoXs(1, 9)
    }
  }

  /**
   * change the position of the logo according to the change of the width of the browser
   */
  resize () {
    if (window.innerWidth >= 992) {
      this.setLogo()
      this.moveLogoLg(9)
    } else {
      this.setLogo()
      this.moveLogoXs(1, 9)
    }
  }

  /**
   * move the logo in the menu in wide screen mode
   *
   * @param {number} index index of the element that serves as a reference for the copy
   */
  moveLogoLg (index) {
    if (this.logo != null) {
      // create and add a new item in the menu
      this.listLinks.insertBefore(this.newLink, this.listLinks.childNodes[index])

      // clone the logo in the new element and delete the initial logo
      this.clone = this.logo.cloneNode(true)
      this.listLinks.childNodes[index].appendChild(this.clone)
      this.logo.parentNode.removeChild(this.logo)
    }
  }

  /**
   * move the logo on the top left in mobile mode
   *
   * @param {number} cloneIndex index of the copied logo
   * @param {number} originIndex parent index of the original logo
   */
  moveLogoXs (cloneIndex, originIndex) {
    if (this.logo != null) {
      // clone the logo
      this.clone = this.logo.cloneNode(true)
      this.navbar.insertBefore(this.clone, this.navbar.childNodes[cloneIndex])

      // delete the initial logo and its parent
      this.logo.parentNode.removeChild(this.logo)
      this.parentLogoOrigin = this.listLinks.childNodes[originIndex]
      this.parentLogoOrigin.parentNode.removeChild(this.parentLogoOrigin)
    }
  }

  /**
   * set the location of the logo to use depending on the width of the browser
   */
  setLogo () {
    if (window.innerWidth >= 992) {
      this.logo = document.querySelector('.navbar .container > .navbar-brand')
    } else {
      this.logo = document.querySelector('.navbar-nav .nav-item .navbar-brand')
    }
  }
}
