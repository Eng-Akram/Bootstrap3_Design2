$(function () {

    'use strict';
    $(window).scroll(function () {

        var navbar = $('.navbar');
            //header = $('header');
        
        /*if ($(window).scrollTop() >= header.height()) {
            if (!navbar.hasClass('scrolled navbar-fixed-top'))
            navbar.addClass('scrolled navbar-fixed-top')
        }else {navbar.removeClass('scrolled navbar-fixed-top')}*/

        if ($(window).scrollTop() >=  navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }

    });

    // Deal with Tabs

    $('.tab-switch li').click(function () {
        // Add Selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide All Divs
        $('.tabs-section .tabs-content > div').hide();
        // Show Div Connected With this Link
        $($(this).data('class')).show();
    });
});