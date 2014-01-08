$(document).ready(function(){
	var glow = '1';
	$(function () {
		setInterval(
			function () {
				var glow = $('.glow').html();
				if (glow == 1) {
					$('.phase1-bg').animate({'opacity':'0.5'},500,function(){
						$('.phase1-bg').animate({'opacity':'1'},500);
					});
				}
			},1000
			);
	});

	$('.zip').on("keydown",function(){
           if ($('.zip').val().length == 4) {
                if ($('.glow').html() < 3) {
		$('.glow').html('3');
		$('.phasebg').fadeOut(100,function(){
			$('.phase3').fadeIn(300,function(){
				$('.phase1').fadeOut(300);
				$('.phase2').fadeOut(300);
				$('.phase4').fadeOut(300);
				$('.phase5').fadeOut(300);
				$('.phase6').fadeOut(300);
				$('.top-headline').fadeIn(300);
				$('.free-report').fadeIn(300);
				$('.checkmarks-area').fadeIn(300);
				$('.blurbs').fadeIn(300);
				$('.rounded-arrow').fadeIn(300);
				$('.final-stage-ticket').fadeOut(300);
			});
		});
                $('.fname').prop('disabled',false);
                $('.lname').prop('disabled',false);
                }
            }
	});

	$('.fname').on("keydown",function(){
           if ($('.fname').val().length == 1 && $('.lname').val().length == 1) {
                if ($('.glow').html() < 4) {
		$('.glow').html('4');
		$('.phasebg').fadeOut(100,function(){
			$('.phase4').fadeIn(300,function(){
				$('.phase1').fadeOut(300);
				$('.phase2').fadeOut(300);
				$('.phase3').fadeOut(300);
				$('.phase5').fadeOut(300);
				$('.phase6').fadeOut(300);
				$('.top-headline').fadeOut(300);
				$('.free-report').fadeOut(300);
				$('.checkmarks-area').fadeOut(300);
				$('.blurbs').fadeOut(300);
				$('.rounded-arrow').fadeOut(300);
				$('.final-stage-ticket').fadeIn(300);
			});
		});
                $('.email').prop('disabled',false);
                }
            }
	});

        $('.lname').on("keydown",function(){
           if ($('.fname').val().length > 1 && $('.lname').val().length > 1) {
                if ($('.glow').html() < 4) {
		$('.glow').html('4');
		$('.phasebg').fadeOut(100,function(){
			$('.phase4').fadeIn(300,function(){
				$('.phase1').fadeOut(300);
				$('.phase2').fadeOut(300);
				$('.phase3').fadeOut(300);
				$('.phase5').fadeOut(300);
				$('.phase6').fadeOut(300);
				$('.top-headline').fadeOut(300);
				$('.free-report').fadeOut(300);
				$('.checkmarks-area').fadeOut(300);
				$('.blurbs').fadeOut(300);
				$('.rounded-arrow').fadeOut(300);
				$('.final-stage-ticket').fadeIn(300);
			});
		});
                $('.email').prop('disabled',false);
                }
            }
	});

	$('.email').on("keydown",function(){
            if($('.email').val().length == 1) {
                if ($('.glow').html() < 5) {
		$('.glow').html('5');
		$('.phasebg').fadeOut(100,function(){
			$('.phase5').fadeIn(300,function(){
				$('.phase1').fadeOut(300);
				$('.phase2').fadeOut(300);
				$('.phase3').fadeOut(300);
				$('.phase4').fadeOut(300);
				$('.phase6').fadeOut(300);
				$('.top-headline').fadeOut(300);
				$('.free-report').fadeOut(300);
				$('.checkmarks-area').fadeOut(300);
				$('.blurbs').fadeOut(300);
				$('.rounded-arrow').fadeOut(300);
				$('.final-stage-ticket').fadeIn(300);
			});
		});
                $('.phone').prop('disabled',false);
                $('.phonelong').prop('disabled',false);
                }
            }
	});

	$('.phonelong').on("keydown",function(){
           if($('.areacode').val().length == 3 && $('.prefix').val().length == 3 && $('.suffix').val().length == 3) {            
                $('.submit-form-ajax').prop('disabled',false);
           }
	});


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

        $('.debt').click(function(){
            if ($('select.debt').val() == "nil") {
            } else {
                if ($('.glow').html() < 2) {
		$('.glow').html('2');
		$('.phasebg').fadeOut(100,function(){
			$('.phase2').fadeIn(300,function(){
				$('.phase1').fadeOut(300);
				$('.phase3').fadeOut(300);
				$('.phase4').fadeOut(300);
				$('.phase5').fadeOut(300);
				$('.phase6').fadeOut(300);
				$('.top-headline').fadeIn(300);
				$('.free-report').fadeIn(300);
				$('.checkmarks-area').fadeIn(300);
				$('.blurbs').fadeIn(300);
				$('.rounded-arrow').fadeIn(300);
				$('.final-stage-ticket').fadeOut(300);
			});
		});
                $('.zip').prop("disabled",false);
                }
            }
        });

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
				$('.form-area-final').fadeOut(300);
				$('.final-stage-ticket').fadeOut(300);
                                $('.footer-section').fadeOut(300);
                                $('.bottom-section').fadeOut(300);
                                $('.final-step-thankyou-panels').fadeIn(300);
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



});