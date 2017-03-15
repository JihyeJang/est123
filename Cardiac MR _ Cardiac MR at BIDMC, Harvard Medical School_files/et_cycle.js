




/*
     FILE ARCHIVED ON 23:05:38 Feb 6, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 3:37:58 Mar 15, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
jQuery(document).ready(function(){
   var $featured_content = jQuery('#featured #slides'),
      et_featured_slider_auto = jQuery("meta[name=et_featured_slider_auto]").attr('content'),
      et_featured_auto_speed = jQuery("meta[name=et_featured_auto_speed]").attr('content');
   
   if ($featured_content.length){
      var et_featured_options = {
         timeout: 0,
         speed: 500,
         cleartypeNoBg: true,
         prev:   '#featured a#left-arrow', 
         next:   '#featured a#right-arrow',
         pager:  '#controllers'
      }
      if ( et_featured_slider_auto == 1 ) et_featured_options.timeout = et_featured_auto_speed;
               
      $featured_content.cycle( et_featured_options );
   }
});