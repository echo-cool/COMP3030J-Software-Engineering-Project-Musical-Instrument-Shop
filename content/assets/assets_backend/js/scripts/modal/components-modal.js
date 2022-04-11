/*=========================================================================================
    File Name: components-modal.js
    Description: Modals are streamlined, but flexible, dialog prompts with the minimum 
				required functionality and smart defaults.
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/
(function(window, document, $) {
	'use strict';

     // onShow event
    $('#onshowbtn').on('click', function() {
        $('#onshow').on('show.bs.modal', function() {
            alert('onShow event fired.');
        });
    });

    // onShown event
    $('#onshownbtn').on('click', function() {
        $('#onshown').on('shown.bs.modal', function() {
            alert('onShown event fired.');
        });
    });

    // onHide event
    $('#onhidebtn').on('click', function() {
        $('#onhide').on('hide.bs.modal', function() {
            alert('onHide event fired.');
        });
    });

    // onHidden event
    $('#onhiddenbtn').on('click', function() {
        $('#onhidden').on('hidden.bs.modal', function() {
            alert('onHidden event fired.');
        });
    });

    //popover
    $('[data-toggle="popover"]').popover();

    // Varying modal content
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    });
    
})(window, document, jQuery);