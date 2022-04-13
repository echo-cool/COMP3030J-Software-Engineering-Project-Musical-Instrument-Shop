/*=========================================================================================
    File Name: maps.js
    Description: google maps
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Gmaps Maps
// ------------------------------

$(window).on("load", function(){

    // Basic Map
    // ------------------------------
    new GMaps({
        div: '#basic-map',
        lat: -34.397,
        lng: 150.644,
        zoom: 8,
        height: 400,
    });


    // Map Events
    // ------------------------------

    map = new GMaps({
        div: '#map-events',
        zoom: 13,
        lat: -33.86,
        lng: 151.209,
        styles: [{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
        click: function(e) {
            alert('clicked');
        },
        dragend: function(e) {
            alert('dragged');
        },
    });


    // Map Markers
    // ------------------------------
    map = new GMaps({
        div: '#markers',
        lat: -25.363,
        lng: 131.044,
        zoom: 4,
        center: {lat: -25.363, lng: 131.044}
    });
    map.addMarker({
        lat: -25.363,
        lng: 131.044,
        title: 'Australia!',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        click: function(e){
            if(console.log)
                console.log(e);
            alert('You clicked in this marker');
        }
    });
    map.addMarker({
        lat: -12.042,
        lng: -77.028333,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p>HTML Content</p>'
        }
    });

});
