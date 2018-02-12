$( function() {
	$('.b-button_kill').click(function(){
		$('.popup_kill').animate({height: "show"}, 1000);
		$('.popup_kill').css( "display", "block" );
	});
	$('.b-button_suicid').click(function(){
		$('.popup_suicide').animate({height: "show"}, 1000);
		$('.popup_suicide').css( "display", "block" );
	});
		$('.b-button_close').click(function(){
		$('.popup').css( "display", "none" );
		$('.popup').animate({height: "hide"}, 1000);
		
	});
} );
