$(document).ready(function(){

	//Default Animations
	$('.clouds').pan({fps: 20, speed: .60, dir: 'left'});

	//Data Serialization
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

	//Tab Functionality

	function TabBuffer() {
		$('.tab-one').hide();
		$('.tab-two').hide();
		$('.tab-three').hide();
		$('.tab-four').hide();
		$('.tab').removeClass('tab-hover');
	};

	$('.tab').click(function(){
		if ( $(this).hasClass('one') ) {
			TabBuffer();
			$(this).addClass('tab-hover');
			$('.tab-one').show();
		}

		if ( $(this).hasClass('two') ) {
			TabBuffer();
			$(this).addClass('tab-hover');
			$('.tab-two').show();
		}

		if ( $(this).hasClass('three') ) {
			TabBuffer();
			$(this).addClass('tab-hover');
			$('.tab-three').show();
		}

		if ( $(this).hasClass('four') ) {
			TabBuffer();
			$(this).addClass('tab-hover');
			$('.tab-four').show();
		}
		console.log('event fired!');
	});

});