// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='devis']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        date: "required",
        heure_begin_select: "required",
        heure_end_select: "required",
        nbr_conv: "required",
        infos_complementaires: {
          required: true,
          minlength: 20
        }
      },
      // Specify validation error messages
    //   messages: {
    //     date: "Please enter your firstname",
    //     heure_begin_select: "Please enter your lastname",
    //     heure_end_select: "Please enter your lastname",
    //     nbr_conv: "Please enter your lastname"
    //   },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

$(document).ready(function(){
  $("#container_lieu :input:checkbox").click(function() {
    $("#container_lieu :input:checkbox").not(this).prop('checked', false);
  });
});

$(document).ready(function(){
  $("#pro_or_part :input:checkbox").click(function() {
    $("#pro_or_part :input:checkbox").not(this).prop('checked', false);
  });
});

$("#devis_submit").click(function(e){
  e.preventDefault();

  $.post(
      'traitement.php',
      {
          date : $("#date").val(),
          heure_begin_select : $("#heure_begin_select").val(),
          heure_end_select : $("#heure_end_select").val(),
          nbr_conv : $("#nbr_conv").val(),
          my_loc : $("#my_loc").val(),
          your_loc : $("#your_loc").val(),
          no_loc : $("#no_loc").val(),
          part : $("#part").val(),
          infos_complementaires : $("#infos_complementaires").val()
      },

      function(data_devis){

          if(data_devis == 'Success_Devis')
          {
            $("#resultat").css("background-color", "#15aa15");
            $("#resultat").html("<p>Vous avez été inscrit avec succès !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Devis_Date')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Le nom de compte est déja utilisé !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Heure_Begin')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Confirmation du mot de passe inccorect !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Heure_End')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Le mot de passe doit faire entre 6 et 13 caracteres !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Lieu')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Le nom de compte doit faire entre 6 et 13 caracteres !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Who')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Votre e-mail semble invalide !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Devis_NbrConv')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Votre couleur semble invalide ! (red ou blue)</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Devis_Compl')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Votre couleur semble invalide ! (red ou blue)</p>");
            setTimeout(disappear, 3000);
          }
          else
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Erreur, veuillez contacter l'Equipe !</p>");
            setTimeout(disappear, 3000);
          }
   
      },
   );
});