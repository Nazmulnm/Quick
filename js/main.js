
(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

    });


    jQuery(window).load(function(){

        
    });
  /* menu  sticky */
    var header = $('.main_menu'); //menu area section
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 50) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });

}(jQuery));	

   /*--------------------------
        jQuery scroll Nav
    ---------------------------- */
    var top_offset = $('.main_menu').height() - 0;  // get height of fixed navbar menu_section
    $('.rightMenu').onePageNav({ // menu class which wanna be scroll
        scrollOffset: top_offset
    }); 