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
    }
};