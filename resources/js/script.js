$(document).ready(function() {
    
    /* for stick navigation*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
      offset: '60px'
    });
    
    /* Scroll on buttons*/
    $('.js--scroll-to-plan').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-plan').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    /* Animation on scroll */
    
    $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(){
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });

    
    /* Navigation Style */
    
    $('.js--nav-icon').click(function(){
       var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')
        
        nav.slideToggle(200);
        if (icon.hasClass('menu-outline')) {
            icon.addB('close-outline');
            icon.removeAttr('menu-outline');
        } else {
            icon.addClass('menu-outline');
            icon.remove('close-outline')
        }
        
    });
    

});


//$('.js--wp-1').waypoint(function() {
//    $('.jp--wp-1').addClass('animated_bounceIn');
//});
//

