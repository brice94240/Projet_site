<?php
include "./config.php";
$date = addslashes($_POST['date']);
$hours_begin_select = addslashes($_POST['heure_begin_select']);
$hours_end_select = addslashes($_POST['heure_end_select']);

$my_loc =  addslashes($_POST['my_loc']);
$your_loc = addslashes($_POST['your_loc']);
$no_loc = addslashes($_POST['no_loc']);
$value_lieu="";

$pro = addslashes($_POST['pro']);
$part = addslashes($_POST['part']);
$value_who="";

$nbr_conv = addslashes($_POST['nbr_conv']);
$infos_complementaires = addslashes($_POST['infos_complementaires']);
$ip=$_SERVER['REMOTE_ADDR'];


if($date == "")
{
    echo "Failed_Devis_Date"; 
}
elseif($hours_begin_select == "")
{
    echo "Failed_Heure_Begin"; 
}
elseif($hours_end_select == "")
{
    echo "Failed_Heure_End"; 
}

elseif($my_loc == "no" && $your_loc == "no" && $no_loc == "no")
{
    echo "Failed_Lieu";
}

elseif($pro == "no" && $part == "no")
{
    echo "Failed_Who";   
}
elseif(intval($nbr_conv)<=0)
{
    echo "Failed_Devis_NbrConv"; 
}
else if(strlen($infos_complementaires)<20)
{
    echo "Failed_Devis_Compl";
}
else
{   
    if($my_loc !== "no")
    {
        $value_lieu = "my_loc";
    }
    elseif($your_loc !== "no")
    {
        $value_lieu = "your_loc";
    }
    elseif($no_loc !== "no")
    {
        $value_lieu = "no_loc";
    }

    if($pro !== "no")
    {
        $value_who = "pro";
    }
    elseif($part !== "no")
    {
        $value_who = "part";
    }

    $adduser = $conn->prepare("INSERT INTO devis(date_event,hours_begin,hours_end,nbr_conv,lieu,comment,cible,created,ip) VALUES (:date_event,:hours_begin,:hours_end,:nbr_conv,:lieu,:comment,:cible,NOW(),:ip)");
    $adduser->execute(array(
    'date_event'=>$date,
    'hours_begin'=>$hours_begin_select,
    'hours_end'=>$hours_end_select,
    'nbr_conv'=>$nbr_conv,
    'lieu'=>$value_lieu,
    'comment'=>$infos_complementaires,
    'cible'=>$value_who,
    'ip'=>$ip,
    ));
    echo "Success_Devis";
}