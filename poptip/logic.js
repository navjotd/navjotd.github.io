
var logic = function() {

	//as a result of pushing poptips to the edge, they might leak out of the edges. This poptip fixes the overflow. It is also called
	// when the window is resized so that the poptips always remain within the image no matter how you resize.
	function fixOverflow($ptWrapper, $poptip) {
		var $cap = $poptip.find('.caption');
		var wrapperWidth = $ptWrapper.find('img').width();
		var wrapperHeight = $ptWrapper.find('img').height();

		var distFromLeft = $poptip.position().left + $cap.position().left;
		var distFromRight = wrapperWidth - (distFromLeft + $cap.outerWidth());
		var distFromTop = $poptip.position().top + $cap.position().top;
		var distFromBottom = wrapperHeight - (distFromTop + $cap.outerHeight());

		if ($cap.hasClass('openup') || $cap.hasClass('opendown')) {
			
			if (distFromBottom <= 0) {
				$cap.height($cap.height() + distFromBottom - 10);
			} else if (distFromTop <= 0) {
				$cap.height($cap.height() + distFromTop - 10);
			}

			if (distFromRight <= 0) {
				var leftVal = parseInt($cap.css('left'));
				$cap.css('left', leftVal + distFromRight - 10);
			} else if (distFromLeft <= 0) {
				var rightVal = parseInt($cap.css('right'));
				$cap.css('right', rightVal + distFromLeft - 10);
			}

		} else {

			if (distFromBottom <= 0) {
				var topVal = parseInt($cap.css('top'));
				$cap.css('top', topVal + distFromBottom - 10);
			} else if (distFromTop <= 0) {
				var bottomVal = parseInt($cap.css('bottom'));
				$cap.css('bottom', bottomVal + distFromTop - 10);
			}
		}
	}


	//this function is called only when the window is resized. It makes sure that the poptips dynamically keep fixing their positioning
	// as the user resizes the browser window.
	function keepPushing($poptip) {
		var $cap = $poptip.find('.caption');
		$cap.css('height', 'auto');
		if ($cap.hasClass('pushTop')) {
			$cap.css('bottom', '-10px');
		} else if ($cap.hasClass('pushBottom')) {
			$cap.css('top', '-10px');
		} else if ($cap.hasClass('pushRight')) {
			$cap.css('left', '-10px');
		} else if ($cap.hasClass('pushLeft')) {
			$cap.css('right', '-10px');
		}
	}

	//this function pushes a poptip to the edge. If a poptip opens up or down, then the logic pushed the poptip horizontally left or right
	//based on what edge its closer to.
	// if the poptip opens right or left, then the function pushes the poptip up or down depending on which edge it is closer to.
	function pushToEdge($poptip, $img) {

		var $cap = $poptip.find('.caption');

		function determineQuadrant() {
			var quad = "";
			var fromLeft = $poptip.position().left / $img.width() * 100;
			var fromTop = $poptip.position().top / $img.height() * 100;

			if (fromTop <= 50) {
				quad = "top";
			} else {
				quad = "bottom";
			}

			if (fromLeft <= 50) {
				quad += " left";
			} else {
				quad += " right";
			}
			return quad;
		}

		var quad = determineQuadrant();

		function pushVertical() {
			if (quad === "top left" || quad === "top right") {
				$cap.addClass("pushTop");
			} else {
				$cap.addClass("pushBottom");
			}
		}

		function pushHorizontal() {
			if (quad === "top left" || quad === "bottom left") {
				$cap.addClass("pushLeft");
			} else {
				$cap.addClass("pushRight");
			}
		}

		if ($cap.hasClass("openup") || $cap.hasClass("opendown")) {
			pushHorizontal();
		} else {
			pushVertical();
		}
	}

	function getAnchorDirection(dir) {
		if (dir === "up"){
			return "down";
		} else if (dir === "down") {
			return "up";
		} else if (dir === "left") {
			return "right";
		} else if (dir === "right") {
			return "left";
		}
	}

	function createPoptip($ptWrapper, ptObj) {
		var $anchor = $(document.createElement('div'));
		$anchor.addClass('anchor');
		$anchor.css('left', ptObj.xPos);
		$anchor.css('top', ptObj.yPos);
		$anchor.data('imgUrl', 'assets/pop' + getAnchorDirection(ptObj.direction));

		var $caption = $(document.createElement('div'));
		$caption.addClass('caption');
		$caption.addClass('open' + ptObj.direction);
		$caption.addClass('close');
		$caption.html(ptObj.content);

		$anchor.append($caption);

		return $anchor;
	}

	return function($ptWrapper, ptObj) {
		var $pt = createPoptip($ptWrapper, ptObj);
		$ptWrapper.append($pt);
		pushToEdge($pt, $ptWrapper.find('img'));
		fixOverflow($ptWrapper, $pt);
		$(window).resize(function(e) { 
			keepPushing($pt);
			fixOverflow($ptWrapper, $pt)
		});
	}
}();

var obj = {xPos: '50%', yPos: '30%', direction: 'right', content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."};


var test = [{xPos: '10%', yPos: '10%', direction:"down", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere augue non dapibus aliquam. Sed eu quam rhoncus, tempor massa eget, vulputate eros. Nullam eu mi vitae magna vestibulum condimentum non at tortor. In consequat vehicula tortor non faucibus. Morbi pretium ligula in lorem eleifend molestie. Maecenas cursus quam vitae purus faucibus, eget ultrices dui lacinia. Aliquam lacinia risus ac augue convallis dapibus."},
{xPos: '30%', yPos: '50%', direction: "right", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
{xPos: '70%', yPos: '60%', direction: "down", content: "tempor massa eget, vulputate eros. Nullam eu mi vitae magna vestibulum condimentum non at tortor. In consequat vehicula tortor non faucibus."}];


//this function iterates through the test object, calls the logic function on each poptip object. Once all the poptips are added to the dom and
// have the right logic, the function then adds the events for poptips, such as clicking the poptip and the image.

function buildWidget() {
	for (var i = 0; i < test.length; i++) {
		logic($('.ptWrapper'), test[i]); //applies the logic to each poptip object
	}

	//this event handler handles the click event on a poptips. It toggles the open and close class on the poptips.
	$('.anchor').click(function(e) {
		e.stopPropagation();
		var $anchor = $(this);
		var $cap = $anchor.find('.caption');

		if ($cap.hasClass('open')) {
			$cap.removeClass('open');
			$cap.addClass('close');
		} else {
			$cap.removeClass('close');
			$cap.addClass('open');
		}

		//makes sure only one poptip is opened at a time
		$.map($('.anchor'), function(obj){
			var $anchor = $(obj);
			var $thiscap = $anchor.find('.caption');

			if (!($thiscap.is($cap))) {
				if ($thiscap.hasClass('open')) {
					$thiscap.removeClass('open');
					$thiscap.addClass('close');
				}
			}
		})
	});


	//when the image wrapper is clicked, this event handler closes all the opened poptips
	$('.ptWrapper').click(function(e) {
		var $anchor = $('.anchor');
		$.map($anchor, function(obj) {
			var $cap = $(obj).find('.caption');
			if ($cap.hasClass('open')) {
				$cap.removeClass('open');
				$cap.addClass('close');
			}
		})
	})

}

buildWidget();