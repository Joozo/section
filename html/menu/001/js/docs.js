 $(function() {
     //get window width
     var $windowWidth = $(window).width();
     //if window width gt 767 .collapse show
     if ($windowWidth > 767) {
         $(".ct-navbar-collapse").css("display", "block");
         $(".ct-dropdown .ct-dropdown-toggle").click(function() {
             $(this).next(".ct-dropdown-menu").slideToggle();
         });
     } else {
         $(".ct-navbar-toggle").click(function() {
             $(this).next(".ct-collapse").slideToggle(400);
         });
         $(".ct-dropdown-menu").css("display", "none");
     }
     // Top menu Effect
     $(window).scroll(function() {
         if ($(this).scrollTop() >= 40) {
             if ($(document).height() - $(window).height() < 160) return;
             $(".logocenter").addClass("sticky");
             $(".logocenter .resMainMenu .ct-navbar-nav>li>a").addClass("fixeda");
             $(".logocenter .ct-nav-bar-child").addClass("fixedch");
         } else {
             $(".logocenter").removeClass("sticky");
             $(".logocenter .resMainMenu .ct-navbar-nav>li>a").removeClass("fixeda");
             $(".logocenter .ct-nav-bar-child").removeClass("fixedch");
         }
     });
 });
