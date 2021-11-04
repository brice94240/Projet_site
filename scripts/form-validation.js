$(function() {
    $("form[name='devis']").validate({
      rules: {
        date: "required",
        heure_begin_select: "required",
        heure_end_select: "required",
        nbr_conv: "required",
        infos_complementaires: {
          required: true,
          minlength: 20
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

$(document).ready(function(){
  $("#container_lieu :input:checkbox").click(function() {
    $("#container_lieu :input:checkbox").not(this).prop('checked', false);
    for(var i=0;i< $("#container_lieu :input:checkbox").length; i++)
    {
      if($("#container_lieu :input:checkbox")[i].checked === true)
      {
        $("#container_lieu :input:checkbox")[i].value="yes";
      }
      else
      {
        $("#container_lieu :input:checkbox")[i].value="no";
      }
    }
  });
});

$(document).ready(function(){
  $("#pro_or_part :input:checkbox").click(function() {
    $("#pro_or_part :input:checkbox").not(this).prop('checked', false);
    for(var c=0;c< $("#pro_or_part :input:checkbox").length; c++)
    {
      if($("#pro_or_part :input:checkbox")[c].checked === true)
      {
        $("#pro_or_part :input:checkbox")[c].value="yes";
      }
      else
      {
        $("#pro_or_part :input:checkbox")[c].value="no";
      }
    }
  });
});
function disappear() {
  $("#resultat").html("");
}