window.onscroll = () => stickyNav()
// window.onLoad = () => stickyNav()

let navbar = document.querySelector('#normalnav')
let navbar_offset = navbar.offsetHeight
let sticky_navbar = document.querySelector('#stickynav')

let stickyNav = () => {

    if(window.pageYOffset >= navbar_offset){
        sticky_navbar.classList.add('sticky-nav-visible')
        navbar.classList.add('nav-not-visible')
    } else {
        sticky_navbar.classList.remove('sticky-nav-visible')
        navbar.classList.remove('nav-not-visible')

    }
}