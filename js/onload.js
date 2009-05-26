$(document).ready(function() {
    if(!$.fontAvailable('Graublau Web')) {
        Cufon.replace('#header ol li');
}

$("#header ol li").backgroundFade("#DA9D17", "#000");
});

jQuery.fn.backgroundFade = function(fadeInColour,fadeOutColour) {
	$(this).hover( 
		function() { 
			$(this)
				//Fade to the new color
				.animate({backgroundColor:fadeInColour}, 750)
				//Fade back to original color
				.animate({backgroundColor:fadeOutColour},750) 
			}, 
		function(){

			}
		);
};