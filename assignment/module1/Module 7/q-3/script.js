$(document).ready(function () {
    var $slider = $('#slider');
    var slideWidth = $('.slide').outerWidth();
    var slideCount = $('.slide').length;
    var totalWidth = slideWidth * slideCount;
    var currentIndex = 0;

    $slider.css('width', totalWidth);

    function slide(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % slideCount;
        } else {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        }

        var mLeft = -currentIndex * slideWidth;
        $slider.animate({ marginLeft: mLeft }, 100);
    }

    // next button click event
    $('#next-btn').on('click', function () {
        slide('next');
    });

    // previous button click event
    $('#prev-btn').on('click', function () {
        slide('prev');
    });
});