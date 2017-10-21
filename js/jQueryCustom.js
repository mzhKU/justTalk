$(document).ready(function () {

$('.firstSlide').click(function() {
		
        $('.secondSlide').removeClass("pagginationActive"); 
        $('.thirdSlide').removeClass("pagginationActive");
        $(this).addClass("pagginationActive");
        
		$(".firstSlide_waterDrop").addClass("waterDropAction");
        $(".secondSlide_waterDrop").removeClass("waterDropAction");
        $(".thirdSlide_waterDrop").removeClass("waterDropAction");
		
		$(".pagination-response").css({opacity: '0'}).delay(1600).animate({
			opacity: '1'
		});
		
		$(".Slide1").delay(800).toggle(800);
		$(".Slide2").fadeOut(800);
		$(".Slide3").fadeOut(800);
		
});
    
$('.secondSlide').click(function() {

        $('.firstSlide').removeClass("pagginationActive");
        $('.thirdSlide').removeClass("pagginationActive");
        $(this).addClass("pagginationActive");
		
        $(".waterDrop").addClass("waterDropAction");
        $(".secondSlide_waterDrop").addClass("waterDropAction");
        $(".firstSlide_waterDrop").removeClass("waterDropAction");
        $(".thirdSlide_waterDrop").removeClass("waterDropAction");
		
		$(".pagination-response").css({opacity: '0'}).delay(1600).animate({
			opacity: '1'
		});
		
		$(".Slide2").delay(800).toggle(800);
		$(".Slide1").fadeOut(800);
		$(".Slide3").fadeOut(800);

});
    
   $('.thirdSlide').click(function() {
 
        $('.secondSlide').removeClass("pagginationActive");
        $('.firstSlide').removeClass("pagginationActive");
        $(this).addClass("pagginationActive");
	   
        $(".waterDrop").addClass("waterDropAction");
        $(".thirdSlide_waterDrop").addClass("waterDropAction");
        $(".firstSlide_waterDrop").removeClass("waterDropAction");
        $(".secondSlide_waterDrop").removeClass("waterDropAction");
	   
		$(".pagination-response").css({opacity: '0'}).delay(1600).animate({
			opacity: '1'
		});
	   
		$(".Slide3").delay(800).toggle(800);
		$(".Slide1").fadeOut(800);
		$(".Slide2").fadeOut(800);

});
    
	$(".menu-dropdown").click(function () {
		$(".dropdown").fadeIn(400);
	});
	
	$(".dropdown-options").mouseleave(function () {
		$(".dropdown").fadeOut(400);
	});
	
	$(".container").click(function () {
		$(".dropdown").fadeOut(400);
	});
	
	$(".container-fluid").click(function () {
		$(".dropdown").fadeOut(400);
	});
	
});