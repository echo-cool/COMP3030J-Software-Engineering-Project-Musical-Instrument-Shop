/*=========================================================================================
    File Name: timeline.js
    Description: Checkbox & Radio buttons with icheck, bootstrap switch & switchery etc..
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/
(function(window, document, $) {
  'use strict';

	// Checkbox & Radio 1
    $('.icheck-task input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
    });

    // Basic Map
    // ------------------------------
    var movedAustralia =  new GMaps({
        div: '#moved-australia',
        lat: -25.363,
        lng: 131.044,
        zoom: 4,
    });
    movedAustralia.addMarker({
        lat: -25.363,
        lng: 131.044,
        title: 'Australia!',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        infoWindow: {
            content: '<h3>Moved Australia</h3> <p>Our new office with more team members.</p>'
        }
    });

})(window, document, jQuery);