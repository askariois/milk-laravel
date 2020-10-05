$(document).ready(function() {
    $(".dropdown, .btn-group").hover(function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});

// Мобильное меню
$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active_menu');
    });
});

$(document).ready(function() {
    $('.header_menu a').click(function() {
        $('.header_burger,.header_menu').toggleClass('active_menu');
    });
});
// Мобильное меню


// Главная страница
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            freeMode: false,
            centerSlides: true,
            navigation: {
                nextEl: '.swiper-button-next-q',
                prevEl: '.swiper-button-prev-q',
            },
        },
        576: {
            spaceBetween: 10,
            slidesPerView: 6,
        }
    }
});

var galleryContent = new Swiper('.content-s', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next-c',
        prevEl: '.swiper-button-prev-c',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});
// Главная страница