let menu = document.getElementById('menu-bars');

console.log(menu)
let navbar = document.querySelector('.navbar');

menu.addEventListener('click' ,function(){

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

} )

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');



window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.forEach(sec =>{
       let top = window.scrollY
       let height = sec.offsetHeight;
       let offset = sec.offsettop - 150;
       let id = sec.getAttribute('id');

       if(top => offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a [href*='+id+']').classList.add('active')
        });
       };
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active')
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  })

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
        slidespreview: 1,
      },
      640: {
        slidespreview: 2,
      },
      768: {
        slidespreview: 2,
      },
      1024: {
        slidespreview: 3,
      },
    },
  })