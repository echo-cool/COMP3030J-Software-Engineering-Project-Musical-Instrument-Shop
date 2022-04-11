/*=========================================================================================
    File Name: coming-soon.js
    Description: Coming Soon
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

/*******************************
*       js of Countdown        *
********************************/

$(document).ready(function() {

    var todayDate = new Date();
    var dd = todayDate.getDate();
    var mm = todayDate.getMonth() + 1;
    var yy = todayDate.getFullYear();
    var currentDate = yy + "/" + (mm+2) + "/" + dd;

    $('#clockImage').countdown(currentDate).on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="clockCard p-2 mr-1 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span class="font-large-3">%-w</span> <br> <p class="lead mb-0">Week%!w </p> </div>'
        + '<div class="clockCard p-2 mr-1 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span class="font-large-3">%d</span> <br> <p class="lead mb-0">Day%!d </p> </div>'
        + '<div class="clockCard p-2 mr-1 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span class="font-large-3">%H</span> <br> <p class="lead mb-0">Hour%!H </p> </div>'
        + '<div class="clockCard p-2 mr-1 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span class="font-large-3">%M</span> <br> <p class="lead mb-0">Minute%!M </h5> </div>'
        + '<div class="clockCard p-2 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span class="font-large-3">%S</span> <br> <p class="lead mb-0"> Second%!S </p> </div>'))
    });

    $('#clockFlat').countdown(currentDate).on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="clockCard p-1"> <span class="font-large-3">%-w</span> <br> <p class="bg-transperant warning lighten-3 clockFormat lead p-1  "> Week%!w </p> </div>'
        + '<div class="clockCard p-1"> <span class="font-large-3">%d</span> <br> <p class="bg-transperant warning lighten-3 clockFormat lead p-1 "> Day%!d </p> </div>'
        + '<div class="clockCard p-1"> <span class="font-large-3">%H</span> <br> <p class="bg-transperant warning lighten-3 clockFormat lead p-1 "> Hour%!H </p> </div>'
        + '<div class="clockCard p-1"> <span class="font-large-3">%M</span> <br> <p class="bg-transperant warning lighten-3 clockFormat lead p-1 "> Minute%!M </p> </div>'
        + '<div class="clockCard p-1"> <span class="font-large-3">%S</span> <br> <p class="bg-transperant warning lighten-3 clockFormat lead p-1 "> Second%!S </p> </div>'))
    });

    $('#clockMinimal').countdown(currentDate).on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="clockCard white p-2"> <span class="font-large-3">%-w</span> <br> <p class="lead white"> Week%!w </p> </div>'
        + '<div class="clockCard white p-2"> <span class="font-large-3">%d</span> <br> <p class="lead white"> Day%!d </p> </div>'
        + '<div class="clockCard white p-2"> <span class="font-large-3">%H</span> <br> <p class="lead white"> Hour%!H </p> </div>'
        + '<div class="clockCard white p-2"> <span class="font-large-3">%M</span> <br> <p class="lead white"> Minute%!M </p> </div>'
        + '<div class="clockCard white p-2"> <span class="font-large-3">%S</span> <br> <p class="lead white"> Second%!S </p> </div>'))
    });

    // YouTube video
    // Uncomment following code to enable YouTube background video
    if($('.comingsoonVideo').length > 0){
        $('.comingsoonVideo').tubular({videoId: 'iGpuQ0ioPrM'});
    }

    // Custom Video
    // Comment / Uncomment to show / hide your custom video. Please exchange your video name and paths accordingly.
    // var BV = new $.BigVideo({useFlashForFirefox:false});
    // BV.init();
    // BV.show([
    //     { type: "video/mp4",  src: "../../../app-assets/videos/481479901.mp4" },
    //     { type: "video/webm", src: "../../../app-assets/videos/481479901.webm" },
    //     { type: "video/ogg",  src: "../../../app-assets/videos/481479901.ogv" }
    // ]);
});
