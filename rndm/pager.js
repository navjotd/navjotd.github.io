var jsonArray;
var objArray = [];
$.get(
    "http://devapi.saved.io/v1/bookmarks",
    {token : 'c024ae62d85003f0e5fc1e142527111a'},
    callback
);

function callback(data) {
	jsonArray = data;
	for (var i = 0; i < jsonArray.length; i++) {
		objArray.push(jsonArray[i].url);
	}

	var num = objArray.length;
	var index = Math.floor(Math.random() * num);
	var link = "http://" + objArray[index];
	window.location.replace(link);
}