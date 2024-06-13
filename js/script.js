$.get('header.html',function(response){ 
    $('.header').html(response); 
    $('.burger_button, .burger_close, .burger a').click(() => {
        $('.burger').toggleClass( "show" )
    });
});
$.get('footer.html',function(response){ 
    $('.footer').html(response); 
});

let prevPos = window.pageYOffset;
window.onscroll = function() {
    var curPos = window.pageYOffset;
    if (prevPos > curPos) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-86px";
        if (window.matchMedia('(max-width: 992px)').matches) {
            document.querySelector(".header").style.top = "-65px";
        }
    }
    prevPos = curPos;
}

if (document.querySelector('.newest_slide') != null) {
    newest_hearts = document.querySelectorAll('.newest_favorite img')
    newest_hearts.forEach(image => {
        image.addEventListener('click', (e) => {
            image.getAttribute('src') == 'icons/heart.svg' ? image.setAttribute('src', 'icons/heart_fill.svg') : image.setAttribute('src', 'icons/heart.svg')
        });
    });
}

if (document.querySelector('.newest_field') != null) {
    slider({
        containerSelector: '.newest_container',
        slideSelector: '.newest_slide',
        wrapperSelector: '.newest_wrapper',
        fieldSelector: '.newest_field',
        elementsPerPage: 3,
        elementsPerPageMobile: 2,
        indicatorsClass: `newest_indicators`,
        columnGap: 30,
        swipe: true,
    });
}
