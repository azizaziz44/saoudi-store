$(document).ready(function(){
    $ ('.menu-toggler').on('click',function(){
        
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open')
    
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $('#up').css({
                "opacity": "1","pointer-events" : "auto"
            });
        }
    else{
        $('#up').css({
            "opacity": "0" , "pointer-events" : "none"
    })
        }

})
$('#up').click(function(){
    $('html').animate({scrollTop:0},500)
})
})

