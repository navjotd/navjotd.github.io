
/* Flicker Class
- you give it a canvas element id
- it determines the width and height of the canvas
- tell it how many objects to draw
- tell it the radius of each object
- tell it the animation duration
- tell it the color of each object rgba object
*/

var requestAnimationFrame = window.requestAnimationFrame || 
                                    window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.msRequestAnimationFrame;

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function getRGBA(color, opacity) {
	return 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + (opacity || color.a) + ')';
}

function Circle(posn, radius, color, opacity) {
	this.posn = posn;
	this.radius = radius;
	this.color = color;
	this.opacity = opacity;
	this.isDecreasing = true;
}

/*
- if the opacity is 1, then 
*/
Circle.prototype.draw = function(context) {
	if (this.isDecreasing && this.opacity <= 0) {
		this.opacity = 0;
		this.isDecreasing = false;
	}

	if (!this.isDecreasing && this.opacity >= 1) {
		this.opacity = 1;
		this.isDecreasing = true;
	}

	if (this.isDecreasing) {
		this.opacity = this.opacity - 0.6;
	} else {
		this.opacity = this.opacity + 0.6;
	}

	context.fillStyle = getRGBA(this.color, this.opacity);
	context.beginPath();
	context.arc(this.posn.x, this.posn.y, this.radius, 0, 2 * Math.PI);
	context.fill();
}


function Flicker(canvasId, numCircles, radius, animationDuration, color) {
	var canvas = document.getElementById(canvasId);
	var canvasWidth = window.innerWidth;
	var canvasHeight = window.innerHeight;
	var context = canvas.getContext('2d');
	var rgba = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')';
	var circleArr = [];

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	context.fillStyle = rgba;

	for (var i = 0; i < numCircles; i++) {
		var x = getRandomArbitrary(0, canvasWidth);
		var y = getRandomArbitrary(0, canvasHeight);
		var posn = {x: x, y: y};
		var circle = new Circle(posn, radius, color, 1)
		circleArr.push(circle);
	}

	function animate() {
		context.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < circleArr.length; i++) {
			circleArr[i].draw(context);
		}

		requestAnimationFrame(animate);
	}

	animate();
}

var num = Math.floor(0.1 * window.innerWidth);
Flicker('flicker', num, 1, 1, {r: 255, g: 255, b: 255, a: 1});

