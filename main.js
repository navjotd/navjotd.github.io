//pixelsPerSecond
var requestAnimationFrame = window.requestAnimationFrame || 
                                    window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.msRequestAnimationFrame;

var slideSpeed = 6;
var slideWidth = window.innerWidth * 5;
var time = slideWidth / slideSpeed;
var mouseDeviate = 0;

$('body').mousemove(function(e) {
	mouseDeviate = (window.innerWidth / 2) - e.pageX;
})


function changeSlides(projectName) {
	$('#slide0').css('background-image', 'url(assets/' + projectName + '5.png)')
	$('#slide1').css('background-image', 'url(assets/' + projectName + '1.png)')
	$('#slide2').css('background-image', 'url(assets/' +projectName + '2.png)')
	$('#slide3').css('background-image', 'url(assets/' +projectName + '3.png)')
	$('#slide4').css('background-image', 'url(assets/' +projectName + '4.png)')
	$('#slide5').css('background-image', 'url(assets/' +projectName + '5.png)')
	$('#slide6').css('background-image', 'url(assets/' +projectName + '1.png)')
}

$('.project-name').hover(function(e) {
	var projectName = $(this).attr('data-name');
	changeSlides(projectName);
	$('#overlay').removeClass('kandpOverlay');
	$('#overlay').removeClass('maisonOverlay');
	$('#overlay').removeClass('asOverlay');
	$('#overlay').removeClass('inkOverlay');
	$('#overlay').addClass(projectName + 'Overlay');
})

$('.project-name').click(function(e) {
	var $project = $(this).closest('li');
	var $wrapper = $('#projects');
	var $descriptions = $wrapper.find('.project-description');
	var $projectDescription = $project.find('.project-description');
	$descriptions = $descriptions.filter(function(index, element) {
		var result = this != $projectDescription[0];
		return result;
	})
	$projectDescription.toggleClass('collapsed');
	$descriptions.addClass('collapsed');

	var projectName = $(this).attr('data-name');
	changeSlides(projectName);
})

$('#projects').hover(function() {
	$(this).removeClass('dimProjects');
	$('#overlay').removeClass('hideOverlay');
}, function() {
	$(this).addClass('dimProjects');
	$('#overlay').addClass('hideOverlay');
})


function animateSlides() {

	slideSpeed = Math.floor(((mouseDeviate / window.innerWidth) * 100) / 5);

	if ($('#slide6').offset().left <= 3) {
		$('.slides').css('left', '0px');
	} else if ($('#slide1').offset().left >= (window.innerWidth -3)) {
		debugger;
		var newPos = $('#slide5').offset().left - window.innerWidth;
		$('.slides').css('left', (-1 * newPos) + 'px');
	} else {
		var slidePos = parseInt($('.slides').css('left'));
		var newSlidePos = slidePos - slideSpeed;
		$('.slides').css('left', newSlidePos + 'px');
	}

	requestAnimationFrame(animateSlides);
}

animateSlides();
