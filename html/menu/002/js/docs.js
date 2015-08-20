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
});
