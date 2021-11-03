<?php
$servername = "localhost";
$username = "root";
$password = "";
$db="geoffrey";
try
{
    $conn = new PDO('mysql:host='.$servername.';dbname='.$db.'', ''.$username.'', ''.$password.'', [PDO::ATTR_ERRMODE  => PDO::ERRMODE_EXCEPTION]);
}
catch ( PDOException $e)
{
    die("<div class='erreur'>Le site est actuellement en maitenance !</div>");
}
?>