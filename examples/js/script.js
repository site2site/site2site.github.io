


console.log('hello again!');



$(document).ready(function(){


	var first_para = $("#first");

	first_para.css("background-color", "red");

	first_para.click( function(){

		console.log( $(this).css("background-color") );

		if( $(this).css("background-color") == "rgb(255, 0, 0)" ){
			$(this).css("background-color", "blue");
		}else{
			$(this).css("background-color", "red");
		}

		

	});


});



