window.onscroll = () => stickyNav()
window.onload = () =>  {
    stickyNav();
    adjustDisplayHeight();
}

let navbar = document.querySelector('#normalnav')
let navbar_offset = navbar.offsetHeight
let sticky_navbar = document.querySelector('#stickynav')
let main_tag = document.querySelector('main')
console.log(main_tag)

let stickyNav = () => {

    if(window.pageYOffset >= navbar_offset){
        sticky_navbar.classList.add('sticky-nav-visible')
        navbar.classList.add('nav-not-visible')
    } else {
        sticky_navbar.classList.remove('sticky-nav-visible')
        navbar.classList.remove('nav-not-visible')

    }
}

let adjustDisplayHeight = () => {
    if(window.innerWidth <= 768){
        main_tag.classList.remove('container')
    } else {
        main_tag.classList.add('container')
    }
}