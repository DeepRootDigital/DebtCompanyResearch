$(document).ready(function(){
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