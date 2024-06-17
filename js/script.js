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

$(document).on('scroll', function() {
    if (document.querySelector('.work_process_wrapper.base') != null) {
        if($(this).scrollTop() + window.innerHeight >= $('.work_process_wrapper.base').offset().top) {
            let mobile = window.matchMedia('(max-width: 992px)').matches;
            $('.work_process_item').each(function(i) {
                if (!mobile || (mobile && i != 2 && i !=3)) {
                    $(this).delay((i++) * 500).fadeTo(500, 1);
                }
            })
        }
    }
    if (document.querySelector('.work_process_wrapper.wide') != null) {
        if($(this).scrollTop() + window.innerHeight >= $('.work_process_wrapper.wide').offset().top) {
            let mobile = window.matchMedia('(max-width: 992px)').matches;
            $('.work_process_item').each(function(i) {
                if (!mobile || (mobile && i != 2 && i != 6)) {
                    $(this).delay((i++) * 500).fadeTo(500, 1);
                }
            })
        }
    }
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
const changeHeartColor = (hearts) => {
    hearts.forEach(favorite => {
        favorite.addEventListener('click', (e) => {
            let img = favorite.querySelector('img');
            img.getAttribute('src') == 'icons/heart.svg' ? img.setAttribute('src', 'icons/heart_fill.svg') : img.setAttribute('src', 'icons/heart.svg')
        });
    });
}

if (document.querySelector('.product_images_bottom img') != null) {
    let bottom_images = document.querySelectorAll('.product_images_bottom img');

    bottom_images.forEach(image => {
        image.addEventListener('click', (e) => {
            let new_src = image.getAttribute('src');
            let main_image = document.querySelector('.product_images_main img');
            let old_src = main_image.getAttribute('src');
            main_image.setAttribute('src', new_src)
            image.setAttribute('src', old_src)
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
        prevSlideSelector: '.newest_prev',
        nextSlideSelector: '.newest_next',
        wrapperSelector: '.newest_wrapper',
        fieldSelector: '.newest_field',
        elementsPerPage: 3,
        elementsPerPageMobile: 2,
        indicatorsClass: `newest_indicators`,
        columnGap: 30,
        swipe: true,
    });
}

if (document.querySelector('.newest_slide') != null) {
    newest_hearts = document.querySelectorAll('.newest_favorite');
    changeHeartColor(newest_hearts);
}
if (document.querySelector('.catalog_item') != null) {
    catalog_hearts = document.querySelectorAll('.catalog_favorite');
    changeHeartColor(catalog_hearts);
}
if (document.querySelector('.product_markers') != null) {
    product_hearts = document.querySelectorAll('.product_favorite');
    changeHeartColor(product_hearts);
}
