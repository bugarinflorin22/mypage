$(document).ready(function() {
    const $sliderWrapper = $('.slider-wrapper');
    const $slides = $('.slide');
    const $indicators = $('.indicator');
    const totalSlides = $slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        $sliderWrapper.css('transform', `translateX(${offset}%)`);
        $indicators.removeClass('active').eq(index).addClass('active');
    }

    $('.next').on('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    $('.prev').on('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    $indicators.on('click', function() {
        currentIndex = $(this).data('slide');
        showSlide(currentIndex);
    });

    function autoPlay() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    let intervalId = setInterval(autoPlay, 5000);

    $('.slider').hover(
        function() { clearInterval(intervalId); },
        function() { intervalId = setInterval(autoPlay, 5000); }
    );
});
