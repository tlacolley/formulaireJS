$(document).ready(function() {

    $("input").attr({

        "minlength":5,

    })
// ==========================Button Clear
    $('#reset').click(function() {
        $(':input').attr("required",false);
        $(':input').attr("minlength",0);
        $(':input', '#myform')

            .val('')
    });
    //


    $("#sub").click(function() {
        $(':input',"#myform").submit();


        if($("input").val().length == 0){

            $("input").prop({
                "required": true,
            })
            // $("input").addClass("is-invalid")

        }
        // else{
        //
        //     $("input").addClass("is-valid")
        // }




        // if($("input").val().length ==0 ){
        //     $("input").addClass("is-invalid")
        //     console.log("h");
        // }
        // else {
        //     $("input").addClass("is-valid")
        //
        // }


        if ($('#inputPassword3').val() !== $('#inputPassword4').val()){
            alert('Different Value');

        } else {
            $('#inputPassword3').addClass("is-valid")
            $('#inputPassword4').addClass("is-valid")
            return true;
        }




    });






     ////////////////////////////////////////////////////////////////////////////










});
