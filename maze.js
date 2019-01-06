"use strict";
 $(document).ready(function(){
	var win=true;
	
	
	$(' #start').click(function(){
		
		
		if(!win){
			reset();
		}
		
         $('.boundary').mouseover(function() {
	            win=false;
				
				$('.boundary').addClass('youlose');
				$('#status').text("You Loose!");
			});
			
			$('#maze').mouseleave(function(){
			win=false;
			
				$('.boundary').addClass('youlose');
				$('#status').text("You Loose!");
			
		});
		
			
			$('#end').mouseover(function(){
			
			if ($(".boundary").hasClass("youlose")) {
				$("#status").text("You Lose!");
			} else {
				$("#status").text("You Win!");
				
				$("#maze").mouseleave(exit);
			}
				
		});
		
		});
	
	var exit = function() {
		$(".boundary").removeClass("youlose");
		$("#status").text("You Win!");
	};
		
		function reset() {
        win = true;
        $(".boundary").removeClass('youlose');
       $('#status').text("Click the \"S\" to begin");
    }
		
		
    });