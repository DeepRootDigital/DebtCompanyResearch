$(document).ready(function(){
	function trackEvent(category, action, label) {
		_gaq.push(['_trackEvent', category, action, label,, false]);
	}

	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	};

	//Default Animations
	$('.clouds').pan({fps: 20, speed: .60, dir: 'left'});

	$('.debt-form-app .step-one button').click(function(event){
		event.preventDefault();
		trackEvent('Form Events', 'Step One', 'Completed');
		$('.step-one').fadeOut();
		$('.step-two').fadeIn();
	});

	$('.debt-form-app .step-two button').click(function(event){
		event.preventDefault();
		if (!$('.zip').val() || $('.zip').val().length != 5) {
			$('.zip').css({'border' : '1px solid #FF0000'});
			alert('Please Enter A Valid Zip Code.');		
		}
		else {
			trackEvent('Form Events', 'Step Two', 'Completed');
			$('.step-two').fadeOut();
			$('.step-three').fadeIn();
		}
	});

	$('.debt-form-app .step-three button').click(function(event){
		event.preventDefault();

		if(!$('.first-name').val()) {
			$('.first-name').css({'border' : '1px solid #FF0000'});
			alert('Please Enter Your First Name.');
		}

		if(!$('.last-name').val()) {
			$('.last-name').css({'border' : '1px solid #FF0000'});
			alert('Please Enter Your Last Name.');
		}

		if(!$('.email').val() || !isValidEmailAddress($('.email').val())) {
			$('.email').css({'border' : '1px solid #FF0000'});
			alert('Please Enter A Valid Email.');
		}

		if(!$('.areacode').val() || !$('.prefix').val() || !$('.suffix').val() ) {
			$('.phone-lit').css({'border' : '1px solid #FF0000'});
			alert('Please Enter a valid Phone Number.');
		}

		else {
			trackEvent('Form Events', 'Step Three', 'Completed');
			var DebtAmmount = window.Ammount;
			var ZipCode = $('.zip').val();
			var FirstName = $('.first-name').val();
			var LastName = $('.last-name').val();
			var Email = $('.email').val();
			var PhoneNumber = $('.areacode').val() + $('.prefix').val() + $('.suffix').val();
			$.ajax({
				type:"POST",
				url: "process.php",
				data: 'debt-ammount='+DebtAmmount+'&first-name='+FirstName+'&last-name='+LastName+'&email='+Email+'&phonenumber='+PhoneNumber,
				success: function(){}

			});

			$('.step-three').hide();
			$('.step-four').show();
		}
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
	});
});