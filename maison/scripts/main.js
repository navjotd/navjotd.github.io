var s = skrollr.init();

$(document).ready(function(){
    site.resize();
    $(window).resize(function(){
        site.resize();
    });
});

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
        
    }
};