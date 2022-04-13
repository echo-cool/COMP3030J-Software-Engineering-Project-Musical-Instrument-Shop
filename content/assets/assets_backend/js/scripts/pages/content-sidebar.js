/*=========================================================================================
    File Name: content-sidebar.js
    Description: Invoices list datables configurations
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

$(document).ready(function() {
    if ($(".sidebar-sticky").length) {
        var headerNavbarHeight,
            footerNavbarHeight;

        // Header & Footer offset only for right & left sticky sidebar
        if ($("body").hasClass('content-right-sidebar') || $("body").hasClass('content-left-sidebar')) {
            headerNavbarHeight = $('.header-navbar').height();
            footerNavbarHeight = $('footer.footer').height();
        }
        // Header & Footer offset with padding for detached right & left dsticky sidebar
        else {
            headerNavbarHeight = $('.header-navbar').height() + 24;
            footerNavbarHeight = $('footer.footer').height() + 10;
        }

        $(".sidebar-sticky").sticky({
            topSpacing: headerNavbarHeight,
            bottomSpacing: footerNavbarHeight
        });

    }
});