// JavaScript Document
jQuery(document).ready(function() {
    var $filter_a =$(".filter a");

    $filter_a.click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");

        var index = $filter_a.index(this);

        $(".portfolio > .portfolio_list").eq(index).show(400).siblings().hide(400);
    });
});
(jQuery);