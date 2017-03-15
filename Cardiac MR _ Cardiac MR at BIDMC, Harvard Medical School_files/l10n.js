




/*
     FILE ARCHIVED ON 22:39:22 Feb 6, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 3:37:43 Mar 15, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function convertEntities(b){var d,a;d=function(c){if(/&[^;]+;/.test(c)){var f=document.createElement("div");f.innerHTML=c;return !f.firstChild?c:f.firstChild.nodeValue}return c};if(typeof b==="string"){return d(b)}else{if(typeof b==="object"){for(a in b){if(typeof b[a]==="string"){b[a]=d(b[a])}}}}return b};