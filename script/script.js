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


         if ($("input:empty") ){
               $('input').addClass("is-unvalid");
               // $("input").prop({
               //     "required": true,
               // })
           }
           else{
                $('input').addClass("is-valid");

           }



        if ($('#inputPassword3').val() !== $('#inputPassword4').val()){
            alert('Different Value');
        }
         else if ($("input:password:empty") ){
            $('#inputPassword3').addClass("is-unvalid");
            $('#inputPassword4').addClass("is-unvalid");
            console.log("plop");

        }
        else{
            $('#inputPassword3').addClass("is-valid");
            $('#inputPassword4').addClass("is-valid");
            return true;
        }



    });


    // $("#myform input.required").filter(function() {
    //     return !this.value;
    // }).addClass("is-unvalid");
    //


     ////////////////////////////////////////////////////////////////////////////










});
