const slickOpts = {
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    infinite: false,
    cssEase: 'linear',
    arrow: true,
    prevArrow: '<div class="slider__button slider__prev"></div>',
    nextArrow: '<div class="slider__button slider__next"></div>',
    dotsClass: 'slider__dots',
    variableWidth: true
}


$(document).ready(function(){
    $('.upcomming__grid').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});