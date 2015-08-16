$(function() {
    var $windowWidth = $(window).width();

    if ($windowWidth > 767) {
        $(".ct-navbar-collapse").css("display", "block");
        $(".ct-dropdown-toggle").click(function() {
            $(this).next(".ct-dropdown-menu").slideToggle();
        });
    } else {
        $(".ct-navbar-toggle").click(function() {
            $(this).parent().next(".ct-navbar-collapse").slideToggle(400);
        });
        $(".ct-dropdown-menu").css("display", "none");
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 40) {
            if ($(document).height() - $(window).height() < 160) return;
            $(".flex-menu .ct-navbar-nav > li > a").addClass("fixed-nav");
            $(".flex-menu .ct-navbar-brand").addClass("fixed-brand");
        } else {
            $(".flex-menu .ct-navbar-nav > li > a").removeClass("fixed-nav");
            $(".flex-menu .ct-navbar-brand").removeClass("fixed-brand");
        }
    });
});
