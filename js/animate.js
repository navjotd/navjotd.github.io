 
 $(document).ready(function(){
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	if ((is_chrome)&&(is_safari)) {is_safari=false;}
	if (is_safari) {
		$('#main_matter').css('font-weight',300);
	}

 	$('#bg').fadeIn(300);
 	$('#grad_overlay').fadeIn(1000);
 	$('#main_matter').fadeIn(2000);


 });