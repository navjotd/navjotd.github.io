var canvasInfo = {
	id: null,
	canvas: null,
	context: null,
};

var points = [];

function paintClusters(clusters) {
	canvasInfo.context.clearRect(0, 0, canvasInfo.canvas.width, canvasInfo.canvas.height);
	for (var k = 0; k < clusters.length; k++) {
		var r = getRandomIntInclusive(0, 255);
		var g = getRandomIntInclusive(0, 255);
		var b = getRandomIntInclusive(0, 255);

		var rgba = 'rgba(' + r + ',' + g + ',' + b + ',1)';
		for (var i = 0; i < clusters[k].length; i++) {
			canvasInfo.context.fillStyle = rgba;
			canvasInfo.context.beginPath();
			canvasInfo.context.arc(clusters[k][i].x, clusters[k][i].y, 5, 0, 2 * Math.PI);
			canvasInfo.context.fill();
		}
	}
}

function setUp(canvasId) {
	canvasInfo.id = canvasId;
	canvasInfo.canvas = document.getElementById(canvasId);
	canvasInfo.context = canvasInfo.canvas.getContext('2d');
	canvasInfo.canvas.height = 600;
	canvasInfo.canvas.width = 600;
}

setUp('myCanvas');

$('#' + canvasInfo.id).click(function(e) {
	var x = e.pageX - $(this).offset().top;
	var y = e.pageY - $(this).offset().left;

	var p = new Point(x, y);
	points.push(p);
	p.paint();
	var result = kmeans(points, Math.sqrt(points.length / 2), distFunc);
	paintClusters(result);
})

function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.paint = function() {
	canvasInfo.context.fillStyle = 'rgba(0,0,0,.5)'
	canvasInfo.context.beginPath();
	canvasInfo.context.arc(this.x, this.y, 5, 0, 2 * Math.PI);
	canvasInfo.context.fill();
};



function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2 dimensional case
function distFunc(a, b) {
	// debugger;
	try {
		return (b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y);
	} catch(e) {
		debugger;
	}

}

function kmeans(data, num_clusters, distFunc) {
	num_clusters = Math.ceil(num_clusters);

	var clusters = [];
	var isSame = true;
	var oldClusters = [];
	var means = [];

	// we initially choose random points to be centroids for out clusters
	for (var i = 0; i < num_clusters; i++) {
		var randIndex = getRandomIntInclusive(0, data.length-1);
		means.push(data[randIndex]);
	}
	debugger;

	// these iterations refine the clusters
	for (var iter = 0; iter < 100; iter++) {

		if (iter > 1){
			for (var i = 0; i < clusters.length; i++) {
				if (clusters[i] != oldClusters[i]) {
					isSame = false;
					break;
				}
			}

			if (isSame) {
				debugger;
				return clusters;
			}
		}

		oldClusters = clusters.splice();

		for (var i = 0; i < num_clusters; i++) {
			clusters[i] = [];
		}

		// For each data point, figure out which mean it is closest to
		for (var i = 0; i < data.length; i++) {
			if (means[0] == undefined) {
				debugger;
			}
			var minDist = distFunc(data[i], means[0]);
			var minDex = 0;
			var distToMean;
			for (var k = 0; k < num_clusters; k++) {
				if (means[k] == undefined) {debugger;}
				distToMean = distFunc(data[i], means[k]);

				if (distToMean < minDist) {
					minDist = distToMean;
					minDex = k;
				}
			}


			clusters[minDex].push(data[i]);
		}

		means = [];

		//refine our means based on the new clusters we have created
		for (var k = 0; k < num_clusters; k++) {
			var sumX = 0;
			var sumY = 0;
			for (var i = 0; i < clusters[k].length; i++) {
				sumX += clusters[k][i].x;
				sumY += clusters[k][i].y;
			}
			means.push({x:(sumX / clusters[k].length), y: (sumY / clusters[k].length)});
		}

	}

	return clusters;
}

$.get( "https://api.github.com/users/navjotd/repos", function( data ) {
  debugger;
});