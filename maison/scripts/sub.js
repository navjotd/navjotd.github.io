
function reverse(s){
    return s.split("").reverse().join("");
}

$(document).ready(function(){
    site.resize();
    $(window).resize(function(){
        site.resize();
    });
});

var site = {
    resize: function(){
        var Imgposition = ($(window).width() - $('.base').width()) / 2;
        var width = $('#logo').width();
        var val2 = Imgposition/2 - 103;
        var ans = Imgposition/2 - width/2;
        var value = (ans >= 10)? ans: 10;
        $('.left').css('left', val2);
        $('.right').css('right', val2);
        $('#logo').css('left', value);

        var num = Math.floor(0.075 * window.innerWidth);
        Flicker('flicker', num, 1, 1, {r: 255, g: 255, b: 255, a: 1});
    }
};

// $('.product-picture, .close-button, .lightbox-image').click(function() {
//     if ($('.lightbox-wrapper').hasClass('hide')) {
//         $('.lightbox-wrapper').removeClass('hide');
//         $('.lightbox-wrapper').addClass('show');
//         $('body').addClass('noScroll');
//     } else {
//         $('.lightbox-wrapper').removeClass('show');
//         $('.lightbox-wrapper').addClass('hide');
//         $('body').removeClass('noScroll');
//     }
// })

function toggleLightbox($lightboxWrapper) {
    if ($lightboxWrapper.hasClass('hide')) {
        $lightboxWrapper.removeClass('hide');
        $lightboxWrapper.addClass('show');
        $('body').addClass('noScroll');
    } else {
        $lightboxWrapper.removeClass('show');
        $lightboxWrapper.addClass('hide');
        $('body').removeClass('noScroll');
    }
}

function toggleMagnify($magnifywrapper) {
    if ($magnifywrapper.hasClass('hide')) {
        $magnifywrapper.removeClass('hide');
        $magnifywrapper.addClass('show');
        $('body').addClass('noScroll');
    } else {
        $magnifywrapper.removeClass('show');
        $magnifywrapper.addClass('hide');
        $('body').removeClass('noScroll');
    }
}

$('.lightbox-wrapper .close-button').click(function() {
    toggleLightbox($(this).parent('.lightbox-wrapper'));
})

$('.magnify-wrapper .close-button, .magnify-wrapper .magnify').click(function() {
    toggleMagnify($(this).parent('.magnify-wrapper'));
})

$('.product-picture .lightbox-button').click(function(e) {
    e.stopPropagation();
    var $productContainer = $(this).closest('.product-container');
    var $lightboxWrapper = $productContainer.find('.lightbox-wrapper');
    toggleLightbox($lightboxWrapper);
})

$('.product-picture').click(function() {
    var $productContainer = $(this).closest('.product-container');
    var $magnifywrapper = $productContainer.find('.magnify-wrapper');
    toggleMagnify($magnifywrapper);
})

$('.product-picture').hover(function() {
    var $buttons = $(this).find('.button');
    $buttons.toggleClass('hide-button');
})

$('.lightbox-image').click(function() {
    var $productContainer = $(this).closest('.product-container');
    var $pic = $productContainer.find('.product-picture');
    var $magnifypic = $productContainer.find('.magnify');
    var $select = $productContainer.find('.item-select');
    var $options = $select.find('option');
    var index = $productContainer.find('.lightbox-image').index($(this));
    var $option = $($options[index + 1]);
    var value = $option.val();
    $select.val(value).change();
    var bgImage = $(this).css('background-image');
    $pic.css('background-image', bgImage);
    $magnifypic.css('background-image', bgImage);
    toggleLightbox($productContainer.find('.lightbox-wrapper'));
})