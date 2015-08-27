function skroll() {
  if (location.href.indexOf("#") === -1) {
      $('.feature').removeAttr('data-');
      $('#body-wrap').addClass('hidden');
      $('#splash').removeClass('dis-none');
  }
  else if (location.href.indexOf("#") != -1){
    skrollr.init();
    $('#splash').addClass('dis-none');
    $('#body-wrap').removeClass('hidden');
  }
};

skroll();

function splash() {
  $('#splash-light').click(function(){
    $('#splash-light').addClass('dis-none');
    $('#splash-logo').animate({height: "7000px"}, 300); 
    $('#splash').animate({opacity:"0"}, 300, function(){
      $(this).css('display', 'none');
    });
    $('#body-wrap').delay(100).animate({opacity:"1"}, 300);
    skrollr.init();
  });
};

splash();