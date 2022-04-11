/*=========================================================================================
    File Name: users-contacts.js
    Description: Users contacts configurations
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

$(document).ready(function() {

    var userDataTable = $('#users-contacts').DataTable();
    // Set the search textbox functionality in sidebar
    $('#search-contacts').on( 'keyup', function () {
        userDataTable.search( this.value ).draw();
    });
    
    // Checkbox & Radio 1
    $('.input-chk').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
    });
        
    userDataTable.on( 'draw.dt', function () {
        // Checkbox & Radio 1
        $('.input-chk').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
        });
    });

});