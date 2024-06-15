$.get('header.html',function(response){ 
    $('.header').html(response); 
    $('.burger_button, .burger_close, .burger a').click(() => {
        $('.burger').toggleClass('show');
    });
    $('.header_dropdown a').click(() => {
        $('.header_dropdown :checked').prop('checked', false);
    });
    $(window).on( "resize", () => {
        $('.burger').removeClass("show")
        $('.header_dropdown :checked').prop('checked', false);
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
    newest_hearts = document.querySelectorAll('.newest_favorite')
    newest_hearts.forEach(favorite => {
        favorite.addEventListener('click', (e) => {
            let img = favorite.querySelector('img');
            img.getAttribute('src') == 'icons/heart.svg' ? img.setAttribute('src', 'icons/heart_fill.svg') : img.setAttribute('src', 'icons/heart.svg')
        });
    });
}

if (document.querySelector('.medallions_tabs') != null) {
    tabs('.medallions_tabs_item', '.medallions_tabs_content', '.medallions_tabs_header', 'medallions_tabs_active');
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
