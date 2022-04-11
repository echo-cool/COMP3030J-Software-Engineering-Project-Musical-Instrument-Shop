/*=========================================================================================
        File Name: form-repeater.js
        Description: Repeat forms or form fields
        ----------------------------------------------------------------------------------------
        Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
        Version: 1.2
        Author: ThemeSelection
        Author URL: https://themeselection.com/
==========================================================================================*/

(function(window, document, $) {
    'use strict';

    // Default
    $('.repeater-default').repeater();

    // Custom Show / Hide Configurations
    $('.file-repeater, .contact-repeater').repeater({
        show: function () {
            $(this).slideDown();
        },
        hide: function(remove) {
            if (confirm('Are you sure you want to remove this item?')) {
                $(this).slideUp(remove);
            }
        }
    });


})(window, document, jQuery);