
var obj = {ht: $(window).height(), tp:$('#cover_content').offset().top};
var btm = $('#cover_content').css('bottom');
var maxScroll = parseFloat(btm) + 100;
var scalar = 0.5;

$(window).on('resize', function() {
	obj.ht = $(window).height();
	obj.tp = $('#cover_content').offset().top;
});

var prevScroll = 0;

$(window).scroll(function(e){
	var scrollDown = $(window).scrollTop();

	if (scrollDown + 80 < (0.8 * obj.ht)) {
		var scrollPercent = scrollDown / obj.ht;

		$('#overlay').css('opacity', scrollPercent - .2);
		$('#cover_content').css('opacity', 1 - 2*scrollPercent);

		$('#cover').css('background-position', '50% ' + '-' + (0.1 * scrollDown) + 'px');	

		if ((scrollDown < maxScroll)) {
			$('#cover_content').css('transform', 'translateY(' + (scalar * scrollDown) + 'px)' );	
		}
	}

	if (scrollDown > prevScroll) {
		$('header').addClass('move');
	} else {
		$('header').removeClass('move');
	}

	prevScroll = scrollDown;	
});