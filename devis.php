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
  <form class="form_devis" method="post" action="traitement.php" name="devis" id="form_devis">
   <p>
       <label for="date">Date :</label>
       <input type="date" name="date" id="date" />
       Heure de debut :
       <select name="heure_begin_select" id="heure_select">
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
    <select name="heure_end_select" id="heure_select">
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
        <input type="checkbox" id="my_loc" name="my_loc" checked="true">
          <label for="my_loc">Dans vos locaux</label>
        <span class="checkmark"></span>
        <input type="checkbox" id="your_loc" name="your_loc">
          <label for="your_loc">Vous avez déjà un lieu</label>
        <input type="checkbox" id="no_loc" name="no_loc">
        <label for="no_loc">Vous n'avez pas de lieu</label>
      </label>
      <br><textarea name="infos_complementaires" cols="40" rows="10" class="text_area_devis" aria-invalid="false" placeholder="Dites-nous en plus sur votre event"></textarea>
      <label class="container" id="pro_or_part">
      <label for="pro_or_part">Vous êtes :</label>
      <input type="checkbox" id="pro" name="pro" checked="true">
        <label for="pro">Professionnel
      <span class="checkmark"></span>
      <input type="checkbox" id="part" name="part">
        <label for="part">Particulier</label>
      </label>
      <input type="submit" value="Envoyer" class="devis_submit">
   </p>
</form>
</div>
</body>
<footer>
</footer>
</html>