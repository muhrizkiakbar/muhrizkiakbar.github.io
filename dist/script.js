window.onscroll = function(){
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop;
  const totop = document.querySelector('#totop')

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
    totop.classList.remove('hidden')
    totop.classList.add('flex')
  } else {
    header.classList.remove('navbar-fixed')
    totop.classList.add('hidden')
    totop.classList.remove('flex')
  }
}

const hamburger = document.querySelector('#toggleMenu')
const navMenu = document.querySelector('#navMenu')

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle("hidden")
})

window.addEventListener('click', function(e){
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})
