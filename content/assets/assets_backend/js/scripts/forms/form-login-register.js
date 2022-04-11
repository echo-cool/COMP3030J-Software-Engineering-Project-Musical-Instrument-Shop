$(document).ready(function(){
	'use strict';
	//Login Register Validation
	if($("form.form-horizontal").attr("novalidate")!=undefined){
		$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
	}

	// For change default year in copyright
	var $year = new Date().getFullYear();
	$(".year").text($year);

});
