/*=========================================================================================
    File Name: nav.js
    Description: Navigation available in Bootstrap share general markup and styles,
                 from the base .nav class to the active and disabled states.
                 Swap modifier classes to switch between each style.
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/
(function(window, document, $) {
    'use strict';

    var heightLeft = $('.nav-left + .tab-content').height();
    $('ul.nav-left').height(heightLeft);
    var heightRight = $('.nav-right + .tab-content').height();
    $('ul.nav-right').height(heightRight);
})(window, document, jQuery);