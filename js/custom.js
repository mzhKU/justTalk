$(document).ready(function() {
	
	$(document).ready(function() {
		$('#BoundContent').toggle(600).css({opacity: '0.4'}).animate({
			opacity: '1'
		},600);	
	 });
	
	$('.containerQuestion').css({display: 'none'});
	
	$('.btn-secondary').click(function () {
		$('.containerQuestion').toggle(600).css({opacity: '0.4'}).animate({
			opacity: '1'
		},600);
		$('.btn-secondary').css({display: 'none'});
	});
	
});