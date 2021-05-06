function ibg(){
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++){
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
    
ibg();

$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

if ($('.slider__body').length > 0) {
    $('.slider__body').slick({
        autoplay: true,
        infinity: false,
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slide-next"></button>',
        prevArrow: '<button type="button" class="slide-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    })
}