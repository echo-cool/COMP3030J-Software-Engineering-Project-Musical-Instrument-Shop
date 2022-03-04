// Other address Panel
$('#other_addr input').on("change", function () {
    if (this.checked)
        $('#other_addr_c').fadeIn('fast');
    else
        $('#other_addr_c').fadeOut('fast');
});
