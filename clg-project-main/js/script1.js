
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
};

// script.js
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.home-slider', {
        loop: true, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.reviews-slider', {
        loop: true, 
        spaceBetween: 20,
        autoHeight:true,
        grabCursor:true,
        breakpoints: {
            640: {
            slidesPerView: 1,
            },
            768: {
            slidesPerView: 2,
            },
            1024: {
            slidesPerView: 3,
            },
        },
    });
});

let loadmorebtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;
loadmorebtn.onclick = ()=>{
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for(var i = currentItem ; i < currentItem+3 ; i++ ){
        boxes[i].style.display= 'inline-block';
    };
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadmorebtn.style.display = 'none';
    };
}

