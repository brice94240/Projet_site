<!DOCTYPE html>
<html>
<head>
  <title>Accueil</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
  
  <script src="scripts/form-validation.js"></script>
  <script src="./scripts/script.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <meta charset="UTF-8" />
</head>
<body id="devis">
<?php
  include("header.php");
  include("config.php");
?>
<div class="header_body"></div>
<div class="header_body_filter"></div>
<div class="content_header_body">TEST</div>
<div class="explain-devis">
  <div class="tite-explain-devis">TITRE</div>
  <div class="tite-accroche-devis">LA PHRASE D'ACCROCHE</div>
    <div class="content-explain-devis">
      <p>Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,
      Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum, quae per multas difficilisque causas adfore iam sperabatur.</p>
    </div>
  </div>
  <div class="infos-devis">
    Merci de remplir le formulaire !
  </div>
  <form class="form_devis" method="post" name="devis" id="form_devis">
   <p>
       <label for="date">Date :</label>
       <input type="date" name="date" id="date" />
       Heure de debut :
       <select name="heure_begin_select" id="heure_begin_select">
         <?php
         for($count=0; $count<24;$count++)
         {
           if(strlen($count)==1)
           {
             echo '<option value="0'.$count.'H">0'.$count.':00H</option>';
           }
           else
           {
            echo '<option value="'.$count.'H">'.$count.':00H</option>';
           }
         }
         ?>
    </select>
    Heure de fin :
    <select name="heure_end_select" id="heure_end_select">
         <?php
         for($count=0; $count<24;$count++)
         {
           if(strlen($count)==1)
           {
             echo '<option value="0'.$count.'H">0'.$count.':00H</option>';
           }
           else
           {
            echo '<option value="'.$count.'H">'.$count.':00H</option>';
           }
         }
         ?>
    </select>
    <label for="nbr_conv">Nombre de convives :</label>
      <input type="number" name="nbr_conv" id="nbr_conv" aria-required="true" aria-invalid="false" placeholder="ex : 50" pattern="[0-9]*"/>
        <label for="lieu_event">Lieu de votre Event :</label>
      <label class="container" id="container_lieu">
        <input type="checkbox" id="my_loc" name="my_loc" value="no">
          <label for="my_loc">Dans vos locaux</label>
        <span class="checkmark"></span>
        <input type="checkbox" id="your_loc" name="your_loc" value="no">
          <label for="your_loc">Vous avez déjà un lieu</label>
        <input type="checkbox" id="no_loc" name="no_loc" value="no">
        <label for="no_loc">Vous n'avez pas de lieu</label>
      </label>
      <br><textarea id="infos_complementaires" name="infos_complementaires" cols="40" rows="10" class="text_area_devis" aria-invalid="false" placeholder="Dites-nous en plus sur votre event"></textarea>
      <label class="container" id="pro_or_part">
      <label for="pro_or_part">Vous êtes :
      <input type="checkbox" id="pro" name="pro" value="no">
        <label for="pro">Professionnel</label>
      <span class="checkmark"></span>
      <input type="checkbox" id="part" name="part" value="no">
        <label for="part">Particulier</label>
      </label>
      <input type="submit" value="Envoyer" class="devis_submit" id="devis_submit">
   </p>
</form>
</div>
<div class="resultat" id="resultat"></div>
</body>
<footer>
</footer>
</html>
<script>
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
          pro : $("#pro").val(),
          infos_complementaires : $("#infos_complementaires").val()
      },

      function(data_devis){

          if(data_devis == 'Success_Devis')
          {
            $("#resultat").css("background-color", "#15aa15");
            $("#resultat").html("<p>Le Devis à bien été envoyé !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Devis_Date')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Date du Devis invalide !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Heure_Begin')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Heure de début invalide !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Heure_End')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Heure de fin invalide !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Lieu')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Merci de choisir le lieu voulus !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Who')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Etes vous Professionel ou Particulier !</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Devis_NbrConv')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Nombre de convives invalide</p>");
            setTimeout(disappear, 3000);
          }
          else if(data_devis == 'Failed_Devis_Compl')
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html("<p>Merci de nous en dire plus sur votre Evenement !</p>");
            setTimeout(disappear, 3000);
          }
          else
          {
            $("#resultat").css("background-color", "#d9534f");
            $("#resultat").html(data_devis);
            // $("#resultat").css("background-color", "#d9534f");
            // $("#resultat").html("<p>Erreur, veuillez contacter l'Equipe !</p>");
            // setTimeout(disappear, 3000);
          }
   
      },
   );
});
</script>