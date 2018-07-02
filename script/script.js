$(document).ready(function() {

    $('#reset').click(function() {
        $(':input', '#myform')
            .not(':button, :submit, :reset, :hidden')
            .val('')
    });
    // ////////////////////////////////////////////////////////////////////////////
    $("#sub").click(function() {
        $("#myform").submit();
        $("#myform").validate({
            rules: {
                "inputText3": {
                    "required": true,
                    "minlength": 5,
                    "maxlength": 60000
                },
                "inputText4": {
                    "required": true,
                    "minlength": 5,
                    "maxlength": 60000
                },
                "inputPassword3": {
                    "required": true,
                    "minlength": 5,
                    "maxlength": 255
                },
                "inputPassword4": {
                    "required": true,
                    "minlength": 5,
                    "maxlength": 255
                },
            }
        });
    });
    $('input').blur(function() {
        if ($('#inputPassword3').attr('value') == $('#inputPassword4').attr('value')) {
            return true;
        } else {
            alert('Different Value');
            return false;
        }
    });
});
