document.addEventListener('DOMContentLoaded', function () {
    console.log("hello");


    document.querySelectorAll('.image-slider img').forEach(images => {
        images.addEventListener('click', () => {
            var src = images.getAttribute('src');
            let mainHomeImage = document.querySelector('.main-home-image');
            if (mainHomeImage) {
                mainHomeImage.src = src;
            }
        });
    });

    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    if (menu && navbar) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });
    }

    window.addEventListener('scroll', () => {
        if (menu && navbar) {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    });

    document.querySelectorAll('.image-slider img').forEach(images => {
        images.addEventListener('click', () => {
            var src = images.getAttribute('src');
            let mainHomeImage = document.querySelector('.main-home-image');
            if (mainHomeImage) {
                mainHomeImage.src = src;
            }
        });
    });

    var swiper = new Swiper('.review-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
