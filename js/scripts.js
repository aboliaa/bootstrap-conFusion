$(document).ready(function(){
	$("#mycarousel").carousel({interval:1000});
	$("#carousel-button").click(function(){
		if ($("#carousel-button").children("span").hasClass("fa-pause")){
			$("#mycarousel").carousel("pause");
			$("#carousel-button").children("span").addClass("fa-play");
			$("#carousel-button").children("span").removeClass("fa-pause");
		} 
		else{
			$("#mycarousel").carousel("cycle");
			$("#carousel-button").children("span").addClass("fa-pause");
			$("#carousel-button").children("span").removeClass("fa-play");
		}
	});
});
