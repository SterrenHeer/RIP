$.get('header.html',function(response){ 
    $('.header').html(response); 
    $('.burger_button, .burger_close').click(() => {
        $('.burger').toggleClass( "show" )
    });
});
