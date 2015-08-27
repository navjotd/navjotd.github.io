// var s = skrollr.init();
var site = {
    resize: function(){
        var Imgposition = $('.feature').position();
        var width = $('#logo').width();
        var val2 = Imgposition.left/2 - 103;
        var ans = Imgposition.left/2 - width/2
        var value = (ans >= 10)? ans: 10;
        $('.left').css('left', val2);
        $('.right').css('right', val2);
        if (window.innerWidth > 600) {
            $('#logo').css('left', value);  
        }

        var num = Math.floor(0.075 * window.innerWidth);
        Flicker('flicker', num, 1, 1, {r: 255, g: 255, b: 255, a: 1});
        
    }
};

var scrolltop = 0;

$(document).ready(function(){
    site.resize();
    $(window).resize(function(){
        site.resize();
    });
});

var requestAnimationFrame = window.requestAnimationFrame || 
                                    window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.msRequestAnimationFrame;

$(window).scroll(function() {
    scrolltop = $(document).scrollTop();
})

function infiniteScroll() {
    console.log(scrolltop);
    if (scrolltop < 0) {
        console.log("going to bottom");
        $(document).scrollTop($(document).height() - window.innerHeight);
    }

    if (scrolltop > $(document).height() - window.innerHeight) {
        $(document).scrollTop(0);
    }

    requestAnimationFrame(infiniteScroll);
}

infiniteScroll();