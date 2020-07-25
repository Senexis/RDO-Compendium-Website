(function($){
    $(window).on('load', function(){
        var STATE = 0;
        $("header#site-header .title").on("click", function () {
            $("body, header#site-header, nav#site-nav, #router").toggleClass("nav-active", STATE);
            $("#router, footer#site-footer").toggleClass("dimmable-active", STATE);
            STATE = !STATE;
        });
        $("#router, footer#site-footer").on("click", function () {
            $("header#site-header, nav#site-nav, #router").removeClass("nav-active");
            $("#router, footer#site-footer").removeClass("dimmable-active");
            STATE = 0;
        });
    });
})(jQuery);