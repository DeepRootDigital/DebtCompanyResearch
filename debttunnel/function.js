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

	$('.zip').focus(function(){
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
                $('.fname').prop('disabled',false);
                $('.lname').prop('disabled',false);
                }
	});

	$('.fname').focus(function(){
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
                $('.email').prop('disabled',false);
                }
	});

	$('.email').focus(function(){
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
                $('.phone').prop('disabled',false);
                $('.phonelong').prop('disabled',false);
                }
	});

	$('.phone').focus(function(){
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
                $('.submit-form-ajax').prop('disabled',false);
                }
	});

	$('.submit-form-ajax').click(function(){
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
            $('.zip').prop("disabled",false);
        });
});