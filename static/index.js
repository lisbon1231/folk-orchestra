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


$(document).ready(function () {
    const title = document.querySelector('.banner__title');
    const header = document.querySelector('.header');
    
    $(window).scroll(function () {
        if (!isElementBelow(title, 100)) {
            header.classList.add('header_fixed')
            header.classList.add('header_short')
        } else {
            header.classList.remove('header_fixed')
            header.classList.remove('header_short')
        }
    });
});


function isElementBelow(element, error = 0) {
    const coordinates = element.getBoundingClientRect();
    // return coordinates.y + coordinates.height >= 0
    return coordinates.y - error >= 0
}
