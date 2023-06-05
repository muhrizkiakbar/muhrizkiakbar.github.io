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

var themeToggleDarkIcon = document.getElementById('moon');
var themeToggleLightIcon = document.getElementById('sun');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('togglemode');


themeToggleBtn.addEventListener('click', function() {

  console.log(localStorage.getItem('color-theme'))
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    console.log(localStorage.getItem('color-theme'))
    
});
