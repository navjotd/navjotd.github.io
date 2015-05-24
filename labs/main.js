var center = {x: 0, y:0};
var windowHeight = $(window).height();
var windowWidth = $(window).width();
center.x = windowWidth/2;
center.y = windowHeight/2;
var maxDist = Math.sqrt((center.x) * (center.x) + (center.y) * (center.y))

$(window).resize(function() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	center.x = windowWidth/2;
	center.y = windowHeight/2;
	maxDist = Math.sqrt((center.x) * (center.x) + (center.y) * (center.y))
	//console.log(maxDist);
})

$('.header').mousemove(function(e){
	var x = (((e.pageX - center.x)) / center.x) * 100;
	var y = (((e.pageY - center.y)) / center.y) * 100;
	console.log(x + '% ' + y + '%');
	$('#logo').css('background-position', x/2 + '% ' + y/2 + '%')
})