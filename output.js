// for slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    speed: 650,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 560,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
       delay: 5000,
       disableOnInteraction: false,
    },
  pagination: {
  el: ".swiper-pagination",
  type: "fraction",
},
  });

  // for second slider
  var swiper2 = new Swiper(".mySwiper2", {
    freeMode: true,
    loop: true,
    speed:20000,
    autoplay: {
        delay:0,
        disableOnInteraction: false,
     },
     breakpoints: {
      "0": {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      "520": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "920": {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
    },
  });

  // for darkmode
  const darkButton = document.querySelector('#dark-btn')
  const drone = document.querySelector('#drone-model')

  darkButton.addEventListener('click',()=>{
    document.body.classList.toggle('open')
    document.body.classList.toggle('active')
    drone.classList.toggle('open')
  })

// for hamburger
const hamburger = document.querySelector('#hamburger')
const menuList = document.querySelector('#menu-list')
const closeIcon = document.querySelector('#close-icon')

hamburger.addEventListener('click',()=>{
  menuList.classList.add('menu')
  menuList.classList.add('menu')
})
closeIcon.addEventListener('click',()=>{
  menuList.classList.remove('menu')
})

// for header background
const video = document.querySelector('#video')
const header = document.querySelector('header')

window.addEventListener('scroll',(e)=>{
 const windowh =   window.innerHeight;
 const videoh = video.getBoundingClientRect().top;
 if(videoh < windowh){
  header.classList.add('scroll')
 }else{
  header.classList.remove('scroll')
 }
 
})
