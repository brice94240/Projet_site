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
