export default class pageAnchor {
  constructor() {
    const anchorTrigger = document.querySelectorAll('a[href^="#"]')

    for (let i = 0; i < anchorTrigger.length; i++) {
      anchorTrigger[i].addEventListener('click', (e) => {
        e.preventDefault()
        let target = 0

        let href = anchorTrigger[i].getAttribute('href')

        if(href != '#') {
          let targetElement = document.getElementById(href.replace('#', ''))
          const rect = targetElement.getBoundingClientRect().top
          const offset = window.pageYOffset
          let header = document.getElementsByClassName('header')[0].clientHeight

          target = (rect + offset) - header
        }

        window.scrollTo({
          top: target,
          behavior: 'smooth',
        })
      })
    }
  }
}