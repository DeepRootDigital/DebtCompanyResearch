//Data Serialization
$(document).ready(function(){

	$('.debt-form-app .step-one button').click(function(event){
		event.preventDefault();
		$('.step-one').fadeOut();
		$('.step-two').fadeIn();
	});

	$('.debt-form-app .step-two button').click(function(event){
		event.preventDefault();
		$('.step-two').fadeOut();
		$('.step-three').fadeIn();
	});

	$('.debt-form-app .step-three button').click(function(event){
		event.preventDefault();
		$('.step-three').fadeOut();
	});

});