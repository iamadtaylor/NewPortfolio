$(document).ready(function() {
    if(!$.fontAvailable('Graublau Web')) {
        Cufon.replace('#header ol li');
}
var rgbaCheck = $("#header").isRGBa();


	$("#header ol li").backgroundFade("#DA9D17", "#000");

$("ul#features li").articleToggle("556px","628px","628px","700px", "200px", "103px");

});

jQuery.fn.isRGBa = function() {
	var bgColour = $(this).css("background-color");
	var rgba = /rgba|RGBa|rgbA/;
	var matchCheck = bgColour.search(rgba);
	if(matchCheck != -1)
		return true; 
	else
		return false;
	
};

jQuery.fn.backgroundFade = function(fadeInColour,fadeOutColour) {
	$(this).hover( 
		function() {
			$(this)
				//Fade to the new color
				.animate({backgroundColor:fadeInColour}, 750)
				
			}, 
		function(){
				//Fade back to original color
				
				$(this).animate({backgroundColor:fadeOutColour},750) 
				
			}
		);
};


jQuery.fn.articleToggle = function(width_in, width_out, width_in_portfolio, width_out_portfolio, width_shrink_portfolio, width_shrink) {
	return this.each(function(){
	        $(this).hover( 
	            function()
				{
					$(this).siblings().children("h3").animate({"opacity": "0" }, 250);
					if($(this).hasClass(".article")) {
						$(this).animate({"width": width_out }, 350, function(){
							$(this).children("p").animate({"opacity": "1" }, 250);
							
							$(this).siblings(".portfolio").animate({"width": width_shrink_portfolio }, 450);
							$(this).siblings(".article").animate({"width": width_shrink }, 450);
							
							
						});
					}
					if($(this).hasClass(".portfolio")) {
						$(this).animate({"width": width_out_portfolio }, 350, function(){
							$(this).children("p").animate({"opacity": "1" }, 250);
							$(this).siblings(".portfolio").animate({"width": width_shrink_portfolio }, 450);
							$(this).siblings(".article").animate({"width": width_shrink }, 450);
							
							
						});
					}
					
					
				},		
				function()
				{
					if($(this).hasClass(".article")) {
						$(this).animate({"width": width_in }, 350, function(){
							$(this).children("p").animate({"opacity": "0" }, 250);
							$(this).siblings().children("h3").animate({"opacity": "1" }, 250);
							$(this).siblings(".portfolio").animate({"width": width_in_portfolio }, 250);
							$(this).siblings(".article").animate({"width": width_in }, 250);
						});
					}
					if($(this).hasClass(".portfolio")) {
						$(this).animate({"width": width_in_portfolio }, 350, function(){
							$(this).children("p").animate({"opacity": "0" }, 250);
							$(this).siblings().children("h3").animate({"opacity": "1" }, 250);
							$(this).siblings(".portfolio").animate({"width": width_in_portfolio }, 250);
							$(this).siblings(".article").animate({"width": width_in }, 250);
						});
					}
					
					
				}
	        );
	    });
	
};