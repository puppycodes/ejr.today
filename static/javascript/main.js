<!-- Initialize Swiper -->

$('.swiper-container').each(function(){
    new Swiper($(this), {
        pagination: $(this).find('.swiper-pagination'),
        paginationClickable: $(this).find('.swiper-pagination'),
        nextButton: $(this).find('.swiper-button-next'),
        prevButton: $(this).find('.swiper-button-prev'),
        loop: true
    });
});
