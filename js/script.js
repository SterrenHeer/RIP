$.get('header.html',function(response){ 
    $('.header').html(response); 
    $('.burger_button, .burger_close').click(() => {
        $('.burger').toggleClass( "show" )
    });
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
