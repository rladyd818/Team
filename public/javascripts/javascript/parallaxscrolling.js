$(window).scroll(function(){
	parallax();
	})
function parallax(){
	var wScroll=$(window).scrollTop();
	$('.box').css('top',40+(wScroll*-0.02)+'em')
	$('.second').css('top',50+(wScroll*-0.02)+'em')
	$('.third').css('top',60+(wScroll*-0.02)+'em')
	$('.fourth').css('top',75+(wScroll*-0.02)+'em')
}