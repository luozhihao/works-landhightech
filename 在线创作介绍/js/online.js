$(function(){
	$('.banner').unslider();
	
	$(document).delegate('.marquee ul li a','mouseenter',function(){
		$(this).css({border:'1px solid #E47B6F'});
		$(this).find('.user-name').css({color:'#E3402D'});
		$(this).find('.user-job').css({background:'#E3402D'});
		$(this).find('.user-border').css({background:'url(images/user-border2.png) no-repeat -3px 0'});
	});
	
	$(document).delegate('.marquee ul li a','mouseleave',function(){
		$(this).css({border:'1px solid #DEDEDE'});
		$(this).find('.user-name').css({color:'#444444'});
		$(this).find('.user-job').css({background:'#CCCCCC'});
		$(this).find('.user-border').css({background:'url(images/user-border.png) no-repeat -3px 0'});
	});
	
	$('.marquee').marquee({
			auto: false,
            speed: 1000,
            showNum: 4,
            stepLen: 4,
            prevElement: $('.user-list-left'),
            nextElement: $('.user-list-right')
	});
})