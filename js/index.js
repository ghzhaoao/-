
$(function() {
		var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
		
		$('.nav ul li').each(function(i,v){
			$(v).hover(function() {
				$('.nav_menu div').eq($(this).index()).show();
				$(v).css("border-bottom","3px solid #f60");
				$('.one li').css("border-bottom","0px solid #f60");
				$('#no').hide();
				$('#no1').hide();
				$('#no2').css("border-bottom","0px solid #f60");
		},function(){
			$('.nav_menu div').eq($(this).index()).hide();
			$(v).css("border-bottom","0px solid #f60");
		})
			$('.nav_menu div').hover(function(){
	 	$('.nav_menu div').eq($(this).index()).show();
	 	$('.nav ul li').eq($(this).index()).css("border-bottom","3px solid #f60");
	 	},function(){
	 		
	 		$('.nav ul li').css("border-bottom","0px solid #f60");
	 		$('.nav_menu div').eq($(this).index()).hide();
	 	})
		
	});
	
})
	
