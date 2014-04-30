var headers = $('h1');
var pointer = 0;
$(window).on('scroll',function(){
	var curHeader = $(headers[pointer]);
	var preHeader = $(headers[pointer-1]);
 	if(curHeader.offset().top-$(window).scrollTop() <= 20) {
		curHeader.addClass('top');
		preHeader.removeClass('top');
		pointer = pointer + 1;
	}

	if(preHeader.offset().top-$(window).scrollTop() == 20) {
		preHeader.addClass('top');
		curHeader.removeClass('top');
		pointer = pointer - 1;
	}
});
