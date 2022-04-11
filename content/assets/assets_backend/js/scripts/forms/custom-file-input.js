/*=========================================================================================
    File Name: custom-file-input.js
    Description: Checkbox & Radio buttons with icheck, bootstrap switch & switchery etc..
    ----------------------------------------------------------------------------------------
    Item Name: Stack - Responsive Admin Theme
    Version: 3.0
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function(window, document, $) {
  'use strict';
  
  //Custom File Input

  $('.custom-file input').change(function (e) {
      $(this).next('.custom-file-label').html(e.target.files[0].name);
  });


})(window, document, jQuery);