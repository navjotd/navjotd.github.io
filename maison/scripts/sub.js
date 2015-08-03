
$(document).ready(function(){
    site.resize();
    $(window).resize(function(){
        site.resize();
    });
});

var site = {
    resize: function(){
        var Imgposition = ($(window).width() - $('.base').width()) / 2;
        var width = $('#logo').width();
        var val2 = Imgposition/2 - 103;
        var ans = Imgposition/2 - width/2;
        var value = (ans >= 10)? ans: 10;
        $('.left').css('left', val2);
        $('.right').css('right', val2);
        $('#logo').css('left', value);
    }
};

$('.product-picture, .close-button, .lightbox-image').click(function() {
    if ($('.lightbox-wrapper').hasClass('hide')) {
        $('.lightbox-wrapper').removeClass('hide');
        $('.lightbox-wrapper').addClass('show');
        $('body').addClass('noScroll');
    } else {
        $('.lightbox-wrapper').removeClass('show');
        $('.lightbox-wrapper').addClass('hide');
        $('body').removeClass('noScroll');
    }
})

$('#img1').click(function() {
    $('#select1').val("dub-69-14k");
    $('#pic1').css("background-image", 'url(http://static1.squarespace.com/static/53cf089fe4b0146dcf5d3e97/53cf16dfe4b0c09c6f118baf/54d17befe4b0ca867cc67bc0/1423014895217/10729274_541516715990150_690844786_n.jpg?format=750w)');
})

$('#img2').click(function() {
    $('#select1').val("dub-cartier");
    $('#pic1').css("background-image", 'url(http://static1.squarespace.com/static/53cf089fe4b0146dcf5d3e97/53cf0d49e4b08a008b3634c9/54d172aee4b08f56dad5ce13/1423012527676/1390362_999204393429390_2096566323_n.jpg?format=750w)');
})
$('#img3').click(function() {
    $('#select1').val("dub-black-gold");
    $('#pic1').css("background-image", 'url(http://static1.squarespace.com/static/53cf089fe4b0146dcf5d3e97/53cf12dbe4b0a0ba4e86b69c/54f67ebae4b0952b4dfcdd60/1425440922549/?format=750w)');
})
$('#img4').click(function() {
    $('#select1').val("dub-rose-gold");
    $('#pic1').css("background-image", 'url(http://static1.squarespace.com/static/53cf089fe4b0146dcf5d3e97/53cf1360e4b0141d9ac8b18a/54f67d91e4b015b0de512d1e/1425440300665/?format=750w)');
})
$('#img5').click(function() {
    debugger;
    $('#select1').val("dub-yellow-goold");
    $('#pic1').css("background-image", 'url(http://static1.squarespace.com/static/53cf089fe4b0146dcf5d3e97/53cf1578e4b01ee22a509bd6/5413b8fae4b03f8abbd1f14b/1410809649354/740787982696876887_549135417.jpg?format=750w)');
})
$('#img6').click(function() {
    $('#select1').val("dub-white-gold");
    $('#pic1').css("background-image", 'url(http://static1.squarespace.com/static/53cf089fe4b0146dcf5d3e97/53cf1578e4b01ee22a509bd6/53cf15c7e4b05b0fba759130/1410809659357/?format=750w)');
})