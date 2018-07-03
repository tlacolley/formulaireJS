$(document).ready(function(){

    var $pseudo = $('#pseudo'),
        $mdp = $('#mdp'),
        $confirmation = $('#confirmation'),
        $mail = $('#mail'),
        $envoi = $('#envoi'),
        $reset = $('#rafraichir'),
        $erreur = $('#erreur'),
        $champ = $('.champ');


    $champ.keyup(function(){
        if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
            $(this).css({ // on rend le champ rouge
                borderColor : 'red',
	        color : 'red'
            });
         }
         else{
             $(this).css({ // si tout est bon, on le rend vert
	         borderColor : 'green',
	         color : 'green'
	     });
         }
    });

    $confirmation.keyup(function(){
        if($(this).val() != $mdp.val()){ // si la confirmation est différente du mot de passe
            $(this).css({ // on rend le champ rouge
     	        borderColor : 'red',
        	color : 'red'
            });
        }
        else{
	    $(this).css({ // si tout est bon, on le rend vert
	        borderColor : 'green',
	        color : 'green'
	    });
        }
    });

    $envoi.click(function(e){
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        // puis on lance la fonction de vérification sur tous les champs :
        verifier($pseudo);
        verifier($mdp);
        verifier($confirmation);
        verifier($mail);
    });

    $reset.click(function(){
        $champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
            borderColor : '#ccc',
    	    color : '#555'
        });
        $erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur
    });
    $('#mdp').pwstrength({
        ui: { showVerdictsInsideProgressBar: true }
    });




    function verifier(champ){
        if(champ.val() == ""){ // si le champ est vide
    	    $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
    	        borderColor : 'red',
    	        color : 'red'
    	    });
        }
    }

    $("#mail").keyup(function() {
     var input = $(this).val();
     var regexMail = new RegExp("[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})");
     if (regexMail.test(input)) {
         $(this).css({ // on rend le champ vert
           borderColor : 'green',
           color : 'green'
       });
     } else {
         $(this).css({ // on rend le champ rouge
           borderColor : 'red',
           color : 'red'
       });
     }
});

// $(document).tooltip();

});
