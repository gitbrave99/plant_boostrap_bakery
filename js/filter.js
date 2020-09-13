
  $(document).ready(function() {
    $("#sr_barrs").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#box_cocardimg .col ").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        
      });
    });
  });
