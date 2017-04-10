jQuery(document).ready(function () {
    jQuery(".c-hamburger").click(function(){
//        alert("hej");
        //jQuery("#mobilmeny").fadeToggle("fast");
//        this.classList.toggle("open");
        jQuery('#main-navigation').toggleClass('open');
        jQuery('.c-hamburger').toggleClass('is-active');
    });
//    jQuery("#menu-close").click(function(){
//        jQuery('#main-navigation').removeClass('open');
//    });
    
//    "use strict";
//
//    var toggles = document.querySelectorAll(".menu-toggle");
//
//    for (var i = toggles.length - 1; i >= 0; i--) {
//        var toggle = toggles[i];
//        toggleHandler(toggle);
//    };
//
//    function toggleHandler(toggle) {
//        toggle.addEventListener( "click", function(e) {
//            e.preventDefault();
//            (this.classList.contains("open") === true) ? this.classList.remove("open") : this.classList.add("open");
//        });
//    }
    
//    $("button").click(function(){
//        $("p").toggleClass("main");
//    });
    
    
    
    
});
