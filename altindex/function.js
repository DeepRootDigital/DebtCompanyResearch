$(document).ready(function(){
	function trackEvent(category, action, label) {
		_gaq.push(['_trackEvent', category, action, label,, false]);
	}

	//Default Animations
	$('.clouds').pan({fps: 20, speed: .60, dir: 'left'});

	// Validation

$('.submit-form-ajax').click(function(event){
		event.preventDefault();
                
                if ($('.debt').val() == "nil") {
                        $('.debt').css({'border' : '1px solid #FF0000'});
			alert('Please choose a debt amount.');
                } else if(!$('.zip').val()) {
                        $('.zip').css({'border' : '1px solid #FF0000'});
			alert('Please Enter Your Zip Code.');
                }
		else if(!$('.fname').val()) {
			$('.fname').css({'border' : '1px solid #FF0000'});
			alert('Please Enter Your First Name.');
		} 
                else if(!$('.lname').val()) {
			$('.lname').css({'border' : '1px solid #FF0000'});
			alert('Please Enter Your Last Name.');
		} 
		else if(!$('.email').val() || !isValidEmailAddress($('.email').val()) || $.trim($('.email').val()).length < 3 ) {
			$('.email').css({'border' : '1px solid #FF0000'});
			alert('Please Enter A Valid Email.');
		}
		else if(!$('.areacode').val() || $('.areacode').val().length < 3 || !$('.prefix').val() || $('.prefix').val().length < 3 || !$('.suffix').val() || $('.suffix').val().length < 4  ) {
			$('.phone-lit').css({'border' : '1px solid #FF0000'});
			alert('Please Enter a valid Phone Number.');
		}
		else {
			var DebtAmmount = window.Ammount;
			var ZipCode = $('.zip').val();
			var FirstName = $('.first-name').val();
			var LastName = $('.last-name').val();
			var Email = $('.email').val();
			var PhoneNumber = $('.areacode').val() + '-' + $('.prefix').val() + '-' + $('.suffix').val();
                        if ($('.glow').html() < 6) {
		$('.glow').html('6');
		$('.phasebg').fadeOut(100,function(){
			$('.phase6').fadeIn(300,function(){
				$('.phase1').fadeOut(300);
				$('.phase2').fadeOut(300);
				$('.phase3').fadeOut(300);
				$('.phase4').fadeOut(300);
				$('.phase5').fadeOut(300);
				$('.top-headline').fadeOut(300);
				$('.free-report').fadeOut(300);
				$('.checkmarks-area').fadeOut(300);
				$('.blurbs').fadeOut(300);
				$('.rounded-arrow').fadeOut(300);
				$('.form-area').css('display','none');
				$('.form-area-final').fadeIn(300);
				$('.final-stage-ticket').fadeIn(300);
			});
		});
                }
		}
	});
	
	$("input").on("keydown", function (e) {
		return e.which !== 32;
	});

        function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	};

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

        $('.footer-privacy').click(function(){
            $('.close-popout').css('display','block');
            $('.privacy-popout').css('display','block');
            $('html,body').animate({scrollTop: $('body').offset().top},'slow');
        });

        $('.footer-terms').click(function(){
            $('.close-popout').css('display','block');
            $('.terms-popout').css('display','block');
            $('html,body').animate({scrollTop: $('body').offset().top},'slow');
        });

        $('.close-popout').click(function(){
            $('.close-popout').css('display','none');
            $('.privacy-popout').css('display','none');
            $('.terms-popout').css('display','none');
        });
});