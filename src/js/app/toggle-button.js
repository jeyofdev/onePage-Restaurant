export function toggleButton () {
  let toggleButton = new ToggleButton()
  toggleButton.init()
}

/**
 * Manage the responsive button
 */
class ToggleButton {
  constructor () {
    this.button = document.querySelector('#navToggle') // responsive button
  }

  /**
   * initialize the methods of the current class
   */
  init () {
    this.collapse()
    this.resize()
  }

  /**
   * activate the menu responsive button
   */
  collapse () {
    this.button.addEventListener('click', (e) => {
      this.button.classList.toggle('collapsed')
      this.button.classList.toggle('is-active')
    })
  }

  /**
   * disable responsive menu button on large screens
   */
  resize () {
    window.onresize = () => {
      if (window.innerWidth >= 992) {
        this.button.classList.remove('is-active')
        this.button.classList.add('collapsed')
      }
    }
  }
}
